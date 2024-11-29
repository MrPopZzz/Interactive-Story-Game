function choosePath(path) {
    const storyText = document.getElementById('story-text');
    const storyChoices = document.getElementById('story-choices');
  
    if (path === 'explore') {
      storyText.textContent = 'You venture deep into the forest, hearing whispers of ancient magic. Do you follow the sound or stay on the path?';
      storyChoices.innerHTML = `
        <button onclick="choosePath('whispers')">Follow the Whispers</button>
        <button onclick="choosePath('path')">Stay on the Path</button>
      `;
    } else if (path === 'village') {
      storyText.textContent = 'You head toward the village. It’s bustling with life. Do you visit the marketplace or the tavern?';
      storyChoices.innerHTML = `
        <button onclick="choosePath('marketplace')">Go to the Marketplace</button>
        <button onclick="choosePath('tavern')">Enter the Tavern</button>
      `;
    } else if (path === 'whispers') {
      storyText.textContent = 'Following the whispers, you find an ancient ruin hidden in the trees. What will you do next?';
      storyChoices.innerHTML = '<button onclick="restart()">Restart</button>';
    } else if (path === 'path') {
      storyText.textContent = 'You stay on the path and eventually find your way out of the forest. The adventure ends here.';
      storyChoices.innerHTML = '<button onclick="restart()">Restart</button>';
    } else if (path === 'marketplace') {
      storyText.textContent = 'The marketplace is full of interesting wares and people. Perhaps you’ll find something valuable here.';
      storyChoices.innerHTML = '<button onclick="restart()">Restart</button>';
    } else if (path === 'tavern') {
      storyText.textContent = 'The tavern is warm and welcoming. You take a seat by the fire and listen to the travelers’ stories.';
      storyChoices.innerHTML = '<button onclick="restart()">Restart</button>';
    }
  }
  
  function restart() {
    const storyText = document.getElementById('story-text');
    const storyChoices = document.getElementById('story-choices');
  
    storyText.textContent = 'You find yourself at the edge of an enchanted forest. Where will you go next?';
    storyChoices.innerHTML = `
      <button onclick="choosePath('explore')">Explore the Forest</button>
      <button onclick="choosePath('village')">Head to the Village</button>
    `;
  }
  