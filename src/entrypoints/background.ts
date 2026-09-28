export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  // Open the Rust PRs page when the extension loads, in dev only
  if (import.meta.env.DEV) {
    browser.tabs.create({
      url: 'https://github.com/rust-lang/rust/pulls'
    });
  }
});
