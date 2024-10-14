// src/components/Chat.js
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import { sendMessage, receiveMessage } from '../features/chat/chatSlice';
import SmartToyIcon from '@mui/icons-material/SmartToy'; // This represents a bot/robot
import { Box, Button, TextField, List, ListItem, ListItemText, Typography, Avatar, Tooltip, Alert, } from '@mui/material';

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const chatWindowRef = useRef(null);

  // useEffect(() => {
  //   // Simulate receiving a message from the bot after a delay
  //   const timer = setTimeout(() => {
  //     dispatch(receiveMessage({ text: 'Hello, I am your assistant!', user: 'Bot', received: true }));
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [dispatch]);
  useEffect(() => {
    // Setup interval to simulate bot responses every 5 seconds
    const interval = setInterval(() => {
      if (messages.length > 0 && !messages[messages.length - 1].received) { // Only respond if user has sent a message
        dispatch(receiveMessage({ text: 'Hello, I am your assistant!', user: 'Bot', received: true }));
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [dispatch, messages]);

  useEffect(() => {
    // Auto-scroll to the latest message
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) {
      setError('Message cannot be empty.');
    } else {
      setError('');
      dispatch(sendMessage({ text: input, user: 'User' }));
      setInput('');
    }
  };

  return (
    <Box
      className=""
      sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '1rem', }}>
      <Box
        ref={chatWindowRef}
        className="hide-scrollbar"
        sx={{ flexGrow: 1, overflowY: 'auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                justifyContent: msg.received ? 'flex-start' : 'flex-end', // Align based on who sent the message
                alignItems: 'flex-start', // Align vertically at the top
                padding: '8px 0', // Add some spacing between messages
              }}
            >
              {/* Bot's message with profile avatar */}
              {msg.received && (
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Tooltip title="Bot" arrow>
                    {/* <Avatar
                      alt="Bot"
                      src="https://via.placeholder.com/40" // Replace with actual image
                      sx={{ width: 40, height: 40, marginRight: '10px' }}
                    /> */}
                    <Avatar sx={{ backgroundColor: '#e0e0e0', marginRight: '10px' }}>
                      <SmartToyIcon /> {/* Using bot icon here */}
                    </Avatar>
                  </Tooltip>
                  <ListItemText
                    primary={
                      <Box
                        sx={{
                          backgroundColor: '#e0e0e0',
                          color: '#000',
                          borderRadius: '12px',
                          padding: '8px 12px',
                          maxWidth: '100%', // Limit the width of bot's messages
                          textAlign: 'left',
                          wordWrap: 'break-word', // Wrap long words
                        }}
                      >
                        {msg.text}
                      </Box>
                    }
                    secondary={<Typography variant="caption">{msg.timestamp}</Typography>}
                  />
                </Box>
              )}

              {/* User's message */}
              {!msg.received && (
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>

                  <ListItemText
                    primary={
                      <Box
                        sx={{
                          backgroundColor: '#1976d2',
                          color: '#fff',
                          borderRadius: '12px',
                          padding: '8px 12px',
                          maxWidth: '100%', // Limit the width of user's messages
                          textAlign: 'right',
                          wordWrap: 'break-word', // Wrap long words
                        }}
                      >
                        {msg.text}
                      </Box>
                    }
                    secondary={<Typography variant="caption" sx={{ color: '#fff' }}>{msg.timestamp}</Typography>}
                  />
                  <Avatar
                    sx={{ width: 40, height: 40, marginLeft: '10px' }} // Hidden avatar for alignment
                  />
                </Box>
              )}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Error message display */}
      {error && (
        <Alert severity="error" sx={{ marginBottom: '1rem' }}>
          {error}
        </Alert>
      )}

      {/* Message Input and Send Button */}
      <Box sx={{ display: 'flex', marginTop: '1rem' }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          error={!!error} // Show error state in input
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        {/* <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ marginLeft: '1rem' }}>
          send
        </Button> */}
        <Button
          variant="contained"
          endIcon={<SendIcon />} // Add SendIcon to the button
          color="primary"
          onClick={handleSendMessage}
          sx={{ marginLeft: '1rem' }}
        >
          Send
        </Button>
      </Box>
    </Box>

  );
};

export default Chat;
