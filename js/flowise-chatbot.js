/**
 * Flowise RAG Chatbot Integration
 * Connects frontend chat interface to Flowise API endpoint
 * Author: Christ Hanzen Rallos
 */

// =============================================
// CONFIGURATION - UPDATE THESE VALUES
// =============================================

// Your Flowise deployment URL (e.g., https://your-flowise-url.railway.app)
const FLOWISE_URL = process.env.FLOWISE_URL || 'http://localhost:3000';

// Your chatflow ID (obtained after deploying the workflow in Flowise)
const CHATFLOW_ID = process.env.CHATFLOW_ID || 'your-chatflow-id-here';

// API endpoint format: https://flowise-url/api/v1/prediction/chatflow-id
const FLOWISE_API_ENDPOINT = `${FLOWISE_URL}/api/v1/prediction/${CHATFLOW_ID}`;

// =============================================
// MAIN CHATBOT FUNCTION
// =============================================

/**
 * Sends a user message to the Flowise API and retrieves the chatbot response
 * @param {string} userMessage - The user's question or message
 * @returns {Promise<string>} The chatbot's response text
 */
async function getFloraiseChatbotResponse(userMessage) {
  try {
    // Validate input
    if (!userMessage || userMessage.trim() === '') {
      return 'Please ask a valid question.';
    }

    // Prepare the API request body
    const requestBody = {
      question: userMessage.trim(),
      // Optional: Include conversation history if your Flowise instance supports it
      // chatHistory: [] // Uncomment and populate if needed
    };

    // Send POST request to Flowise API
    const response = await fetch(FLOWISE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Optional: Add authorization if your Flowise instance requires it
        // 'Authorization': `Bearer ${FLOWISE_API_KEY}`
      },
      body: JSON.stringify(requestBody),
    });

    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`Flowise API Error (${response.status}):`, errorData);
      return getErrorMessage(response.status);
    }

    // Parse the response JSON
    const data = await response.json();

    // Extract the chatbot answer from the response
    // Flowise typically returns: { text: "response..." }
    const chatbotAnswer = data.text || data.answer || data.response || 'Unable to process your question.';

    return chatbotAnswer;
  } catch (error) {
    // Handle network or parsing errors
    console.error('Error calling Flowise API:', error);
    return getErrorMessage('network');
  }
}

// =============================================
// ERROR HANDLING
// =============================================

/**
 * Returns appropriate error messages based on error type
 * @param {string|number} errorType - Type of error (network, 400, 500, etc.)
 * @returns {string} User-friendly error message
 */
function getErrorMessage(errorType) {
  const errorMessages = {
    'network': 'Sorry, I\'m having trouble connecting to the chatbot. Please try again in a moment.',
    '400': 'Invalid question format. Please try rephrasing your question.',
    '401': 'Authentication error. Please contact the administrator.',
    '403': 'Access denied. Please contact the administrator.',
    '404': 'The chatbot service is not available. Please check the configuration.',
    '500': 'The chatbot service encountered an error. Please try again later.',
    '503': 'The chatbot service is temporarily unavailable. Please try again soon.',
  };

  return errorMessages[errorType] || 'I encountered an issue while processing your request. Please try again.';
}

// =============================================
// REPLACE HARDCODED RESPONSES
// =============================================

/**
 * This function replaces the old hardcoded chatResponses object
 * Use this in your chat handler instead of the old implementation
 * 
 * Example usage in your HTML chat handler:
 * 
 * async function handleChatSubmit(event) {
 *   event.preventDefault();
 *   const userMessage = document.getElementById('chatInput').value;
 *   const chatbotResponse = await getFloraiseChatbotResponse(userMessage);
 *   displayChatMessage(userMessage, chatbotResponse);
 * }
 */

// =============================================
// HELPER: Display chat message in UI
// =============================================

/**
 * Displays a chat message in the chat interface
 * Customize this based on your HTML structure
 * @param {string} userMessage - The user's message
 * @param {string} botResponse - The bot's response
 */
function displayChatMessage(userMessage, botResponse) {
  const chatContainer = document.getElementById('chatMessages');
  if (!chatContainer) {
    console.warn('Chat messages container not found');
    return;
  }

  // Create user message element
  const userMessageEl = document.createElement('div');
  userMessageEl.className = 'chat-message user-message';
  userMessageEl.textContent = userMessage;
  chatContainer.appendChild(userMessageEl);

  // Create bot response element
  const botMessageEl = document.createElement('div');
  botMessageEl.className = 'chat-message bot-message';
  botMessageEl.textContent = botResponse;
  chatContainer.appendChild(botMessageEl);

  // Scroll to the latest message
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Clear input field
  const inputField = document.getElementById('chatInput');
  if (inputField) {
    inputField.value = '';
  }
}

// =============================================
// OPTIONAL: Environment Configuration Loader
// =============================================

/**
 * Load configuration from environment variables (for Node.js/SSR environments)
 * This won't work in pure browser environments
 */
function loadEnvironmentConfig() {
  try {
    if (typeof process !== 'undefined' && process.env) {
      // Node.js environment
      return {
        flowise Url: process.env.FLOWISE_URL,
        chatflowId: process.env.CHATFLOW_ID,
      };
    }
  } catch (e) {
    console.log('Not in a Node.js environment, using hardcoded config');
  }
  return null;
}

// =============================================
// EXPORT FOR MODULE SYSTEMS
// =============================================

// For use with ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getFloraiseChatbotResponse,
    displayChatMessage,
    getErrorMessage,
  };
}
