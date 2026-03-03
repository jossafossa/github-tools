export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  // Open the Rust PRs page when the extension loads
  browser.tabs.create({
    url: 'https://github.com/rust-lang/rust/pulls'
  });
});
