# Header

```js
const [scrollingUp, setScrollingUp] = useState(true);
const [lastScrollPos, setLastScrollPos] = useState(0);
```

scrollingUp 用於表示用戶是否正在向上滾動，lastScrollPos 用於存儲上一次滾動的位置

## handleScroll

用於處理滾動事件。它會獲取當前滾動位置，並根據上次滾動位置和當前滾動位置來判斷用戶是否在向上滾動。然後，它會更新 scrollingUp 和 lastScrollPos 的狀態。

# ShuffleCards

```js
const [clicked, setClicked] = useState(false);
```

表示是否已單擊卡片

## handleClick

單擊卡片時調用，將 clicked 的值設置為其相反值，並套用相對應的 CSS 。

# Video

```js
const videoRef = useRef();
```

將 video 元素的存儲在 videoRef 中。

## useEffect

建立一個 IntersectionObserver 觀察器，觀察 video 元素是否在畫面中可見，通過 entries[0] 獲取 video 元素的狀態。然後，通過 entry.intersectionRatio 屬性獲取元素可見比例。如果元素可見比例超過 0.3，則調用 video.play() 方法來播放影片，否則調用 video.pause() 方法暫停影片，如果不可見，則設置 video.currentTime = 0，使影片從頭開始播放。

# HorizontalCards

```js
const containerRef = useRef();
```

用來獲取卡片列表所在的 DOM 元素。然後，定義一個 handleWheel 函式來監聽滑鼠滾輪事件，根據滾輪滾動的方向來移動卡片。

## useEffect

監聽 wheel 事件，當滾輪發生事件時，會觸發 handleWheel 函式，檢查事件中的 deltaY 屬性，並且更新 containerRef 的 scrollLeft 屬性，以實現水平滾動。
