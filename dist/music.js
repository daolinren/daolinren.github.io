const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '大笨-随缘(片段)',
            artist: '道林集录客',
            url: '/mp3/大笨-随缘(片段).mp3',
            cover: '封面',
        },
       {
            name: '纯音乐 - 我的祖国 (片段).mp3',
            artist: '道林集录客',
            url: '/mp3/纯音乐 - 我的祖国 (片段).mp3',
            cover: '封面',
        },
        {
            name: '首席执行官小七&野马V-With an Orchid(钢琴版)',
            artist: '道林人',
            url: '/mp3/首席执行官小七&野马V-With an Orchid(钢琴版).mp3',
            cover: '封面',
        },
    ]
});