## 1.0.5

- Support browser back and forward action.
- Hide btn when in Explore or others' homepage.
- New flag `show_alt` to hide post description by default.

Because the changes of Instagram, the img-alt of first 12 posts is something like `Image may contain: ***` or `No automatic alt text available.` now, not description of post any longer. I set a new flag called `show_alt` and hide description by default. You can still show the img-alt by setting `show_alt` to 1.

## 1.0.4

- No need to reflesh the page in your personal page.

Well I'm tired to this issue too.

I use a trick to get a trigger of history.pushState. It is hard because I can only get this trigger before the push, and I can't get the new path. Sadly I have to use setTimeout and compare old_path and new_path to check if the push is over. Luckily it looks working fine.

## 1.0.3

- Update the GetUrlSegmentByUrl regexp.

## 1.0.2

- Use MutationObserver instead of polling(aka function setTimeout).

Today I'm trying to make a new project called oneClickDeleteTwitterTweet (Yep imma going to delete everything). I'm tired of using polling(aka function setTimeout), cuz it may cause a terrible memory leak, and polling for monitoring is stupid. I found a lot , such as `bind`(require jQuery), `Mutation events`(Deprecated), `addEventListener`(sounds decent), and `MutationObserver`. Most pages recommend `MutationObserver` and it looks cool. So I decide to use it. It's weired that my userscript doesn't work on twitter and I don't know why. To ensure I'm using MutationObserver in a right way, I add it to this project, and it works very well. Now we have a better performance and less memory usage.

## 1.0.1

- Fix a visual issue.

Just add `style="word-break: break-word;` to fix the visual issue. It seems Firefox doesn't have this issue. It's just working. The `style="word-break: break-word;` has not been standardized. Well, It works well on Chrome, and Firefox just ingores it cuz nothing needs to be done. Well, I don't use Edge or any other browsers, so it'll be a pleasure if you can test it on other browsers.

## 1.0.0

First commit.
