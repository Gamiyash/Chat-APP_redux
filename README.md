# Chat Interface Project

This project is a responsive and visually appealing chat interface built with **React**, **MUI Components (Material UI)**, and **Redux Toolkit**. It simulates real-time chat messaging between a user and a bot, complete with sending and receiving messages, scrollable chat, and error handling.

## Features

- **Responsive Chat UI**: A clean and modern chat interface that works on all screen sizes.
- **Message Input & Send**: Users can type messages and send them via the input field.
- **Bot Response Simulation**: Simulates bot responses using `setTimeout`.
- **Scroll Auto-Adjust**: Automatically scrolls to the latest message.
- **Timestamps**: Displays timestamps for each message.
- **Error Handling**: Prevents sending empty messages with user feedback.
- **Bot Avatar**: The bot's messages are represented with a bot icon (`SmartToyIcon`).
- **User and Bot Messages**: User messages align to the right, bot messages align to the left.
- **Material UI Components**: Leverages MUI components for layout, buttons, icons, etc.
- **State Management**: Uses Redux Toolkit for managing chat state (messages, user info).

## Technologies Used

- **React**: Functional components and hooks for building the UI.
- **Redux Toolkit**: For managing chat state.
- **MUI (Material UI)**: For building a responsive and visually appealing interface.
- **React 18**: Taking advantage of new features like automatic batching and transitions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Gamiyash/chat-interface.git
   cd chat-interface
