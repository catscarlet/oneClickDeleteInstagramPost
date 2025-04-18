# oneClickDeleteInstagramPost

**Notice: This script may no longer work due to the changes of Instagram.**

This is a userscript for deleting your Instagram posts.

Now you can delete your posts on PC, without Yes/No Confirm. Deleting with free and quick.

## Installation, Screenshot, and How to

Installation and Screenshot: [oneClickDeleteInstagramPost On Greasy Fork](https://greasyfork.org/zh-CN/scripts/373339-oneclickdeleteinstagrampost)

Users must install a user script manager first. Here is my recommend:

- Violentmonkey: [Chrome Web Store](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag), [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/), [GitHub](https://github.com/violentmonkey/violentmonkey/releases/latest)

Or try any other user script managers as you wish. You can find a lot information about user script on Greasy Fork.

New user can't use the 'delete' function, unless you set `safe_lock;` to `0` in the script. This project is just for some special propose and shouldn't enable all time, but this project also has a feature about show description on personal page, cause some users may enable it even they don't need the 'delete' function. I made a safe_lock in order to protect data in case of misclick.

For question, please read **Known issues**.

## Feedback

Pull request is welcome.

Please send pull reqest to dev branch.

## Security

### Usage statistics?

Nope. No infomation is submitted.

### Data recovery?

This script doesn't record any data, that means: **If you really delete a post, it will be gone**, never come back. Script doesn't backup your data, nor the Instagram because Instagram doesn't have a Recycler.

**Deleted is Deleted**

This project is not responsible for any data lost.

## Known issues

- ~~You need to reflesh the page in your personal page in order to active this script.~~ (Fixed in 1.0.4)
- ~~Some personal page may have visual issues. I don't know how to get it or fix it yet.~~ (Fixed in 1.0.1)
- The img_alt of first 12 posts is something like `Image may contain: ***` or `No automatic alt text available.` now, not description if post any longer. (No desire to investigate)
- The description of video post can't get shown. (No desire to investigate)
- After you delete a post, if you scroll the page far enough and scroll back, the deleted post will be back on your page, but it will be unaccessable. (No desire to investigate)
- Even if you enter a personal page which doesn't belong to you, the delete button and description are still shown, of course the delete function won't be functional. ~~(Fixed in 1.0.5)~~ (Still broken and no desire to investigate)

## License

MIT

## Additional Credits

- [notslang/instagram-id-to-url-segment](https://github.com/notslang/instagram-id-to-url-segment) Old API Url to ID Convert
- [dev-coco/Instagram-Convert-Url](https://github.com/dev-coco/Instagram-Convert-Url) New API Url to ID Convert

## Source Code

<https://github.com/catscarlet/oneClickDeleteInstagramPost>
