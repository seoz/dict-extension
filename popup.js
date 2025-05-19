document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  // Focus the input field when popup opens
  searchInput.focus();

  function openDictionaryTabs(word) {
    const urls = [
      `https://www.google.com/search?q=define+${word}`,
      `https://en.dict.naver.com/#/search?query=${word}`,
      `https://dictionary.cambridge.org/pronunciation/english/${word}`
    ];

    urls.forEach(url => {
      chrome.tabs.create({ url: url });
    });
  }

  function handleSearch() {
    const word = searchInput.value.trim();
    if (word) {
      openDictionaryTabs(word);
      window.close(); // Close the popup after opening tabs
    }
  }

  searchButton.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
}); 