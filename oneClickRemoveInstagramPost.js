// ==UserScript==
// @name                oneClickDeleteInstagramPost
// @name:en             oneClickDeleteInstagramPost
// @name:ja             oneClickDeleteInstagramPost
// @name:zh             oneClickDeleteInstagramPost 一键删除Instagram帖子
// @namespace           https://github.com/catscarlet/oneClickDeleteInstagramPost
// @description         Add [Delete] button on the post in Personal Page on Instagram. Directly delete post without confirm.
// @description:en      Add a [Delete] button to the Personal Page on Instagram. Directly delete post without confirm.
// @description:ja      Instagramの個人ページの投稿に[削除]ボタンを追加してください。 確認なしで投稿を直接削除します。
// @description:zh      在 Instagram 的个人页面的图片上添加 [Delete] 按钮，点击直接图片，不再有确认提示框
// @version             1.0.1
// @author              catscarlet
// @match               *://www.instagram.com/*/
// @require             https://cdn.jsdelivr.net/npm/bignumber.js@2.4.0/bignumber.min.js
// @compatible          chrome  支持
// @run-at              document-end
// @grant               none
// ==/UserScript==

(function() {
    'use strict';

    let safe_lock = 1;

    let lines = 0;
    let rmap = {
        '0': 'Q',
        '1': 'R',
        '2': 'S',
        '3': 'T',
        '4': 'U',
        '5': 'V',
        '6': 'W',
        '7': 'X',
        '8': 'Y',
        '9': 'Z',
        '-': '$',
        'A': '0',
        'B': '1',
        'C': '2',
        'D': '3',
        'E': '4',
        'F': '5',
        'G': '6',
        'H': '7',
        'I': '8',
        'J': '9',
        'K': 'a',
        'L': 'b',
        'M': 'c',
        'N': 'd',
        'O': 'e',
        'P': 'f',
        'Q': 'g',
        'R': 'h',
        'S': 'i',
        'T': 'j',
        'U': 'k',
        'V': 'l',
        'W': 'm',
        'X': 'n',
        'Y': 'o',
        'Z': 'p',
        'a': 'q',
        'b': 'r',
        'c': 's',
        'd': 't',
        'e': 'u',
        'f': 'v',
        'g': 'w',
        'h': 'x',
        'i': 'y',
        'j': 'z',
        'k': 'A',
        'l': 'B',
        'm': 'C',
        'n': 'D',
        'o': 'E',
        'p': 'F',
        'q': 'G',
        'r': 'H',
        's': 'I',
        't': 'J',
        'u': 'K',
        'v': 'L',
        'w': 'M',
        'x': 'N',
        'y': 'O',
        'z': 'P',
        '_': '_',
    };

    setTimeout(pending, 2000);

    function pending() {
        let article = document.getElementsByTagName('article');

        if (!article.length || !article[0].children[0].childElementCount || !article[0].children[0].children[0].childElementCount) {
            setTimeout(pending, 2000);
        } else {
            getPost();
        }
    }

    function getPost() {
        let articles = document.getElementsByTagName('article')[0].children[0].children[0];

        for (let articlesline of articles.children) {
            for (let post of articlesline.children) {
                let link = post.children[0];
                if (!link) {
                    return false;
                }
                if (link.hasAttribute('alte')) {
                    continue;
                }

                let url = link.href;
                let urlSegment = GetUrlSegmentByUrl(url);
                if (!urlSegment) {
                    continue;
                }
                let block = link.children[0];
                let img = block.children[0].children[0];
                let alt = img.alt;

                let btn_div = document.createElement('div');
                let media_id = getMediaIdByUrlSegment(urlSegment);

                let btn = document.createElement('button');
                btn.innerHTML = 'delete this';
                btn.style.margin = '0.5em';
                btn.style.backgroundColor  = 'darksalmon';
                btn.onclick = function() {
                    deleteByMediaId(media_id, btn, post);
                };

                if (safe_lock) {
                    btn.disabled = true;
                    btn.title = 'Safe_lock is ON! You need to edit the script and change the "safe_lock" to 0 in order to delete your post without confirm.';
                }

                btn_div.appendChild(btn);
                post.appendChild(btn_div);

                let alt_div = document.createElement('div');
                alt_div.innerHTML = '<span style="word-break: break-word;">' + alt + '</span>';
                post.appendChild(alt_div);

                link.setAttribute('alte', 1);
            }
        }

        setTimeout(pending, 2000);
    };

    function GetUrlSegmentByUrl(url) {
        let regexp = /https:\/\/www.instagram.com\/p\/(\S+)\/\?taken-by=(\S+)/;
        let result = url.match(regexp);
        if (result) {
            return result[1];
        } else {
            return false;
        }
    }

    function getMediaIdByUrlSegment(urlSegment) {
        let id = '';
        for (let i in urlSegment) {
            let char = urlSegment[i];
            let value = rmap[char];
            id += value;
        }

        let media_id = (new BigNumber(id, 64)).toString(10);
        return media_id;
    }

    function deleteByMediaId(media_id, btn, post) {
        btn.innerHTML = 'deleting';
        btn.style.backgroundColor  = 'yellow';
        btn.onclick = false;
        btn.disabled = true;

        let url = 'https://www.instagram.com/create/' + media_id + '/delete/';

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', url, true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.setRequestHeader('x-csrftoken', window._sharedData.config.csrf_token);
        xmlhttp.send(null);

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    let rst = JSON.parse(xmlhttp.response);
                    if (rst.did_delete) {
                        post.style.visibility = 'hidden';
                    } else {
                        btn.innerHTML = 'Failed';
                    }
                } else {
                    btn.innerHTML = 'Failed';
                }
            }
        };
    }
})();
