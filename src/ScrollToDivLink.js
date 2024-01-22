const ScrollToDivLink = ({ targetId, children }) => {
    const handleClick = (e) => {
        e.preventDefault()
      const targetDiv = document.getElementById(targetId);
  
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <a href={`#${targetId}`} onClick={handleClick}>
        {children}
      </a>
    );
  };
  
  export default ScrollToDivLink;