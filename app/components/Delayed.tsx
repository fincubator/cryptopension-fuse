const DelayedMessageButton = ({ onDelayedMessages }) => {
  const handleClick = () => {
    setTimeout(() => {
      onDelayedMessages('First message displayed after delay.', null);
      setTimeout(() => {
        onDelayedMessages('First message displayed after delay.', 'Second message displayed after additional delay.');
      }, 2000); // Display second message 2 seconds after the first
    }, 2000); // Display first message 2 seconds after clicking
  };

  return <button onClick={handleClick}>TopUp</button>;
};
