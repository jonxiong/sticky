// position: -webkit-sticky;
// position: sticky; 
// 根据兼容性来做是否用到下面方法

function onScroll(fun, interval) {
    let time;
    let firstTime = new Date();
    let firstTotop = document.querySelector('.sticky').offsetTop;
    return function() {
        let secondTime = new Date();
        clearTimeout(time);
        if (secondTime - firstTime >= interval) {
            fun(firstTotop);
            firstTime = secondTime;
        } else {
            time = setTimeout(fun, time);
        }
    }
}
// 粘性方法
function sticky(num) {
    let sticky = document.getElementsByClassName('sticky');
    let zhan = document.getElementsByClassName('zhan');
    let stickyArr = Array.from(sticky);
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // 获取第一个节点距离上方距离
    if (scrollTop <= num) {
        removeClass('sticky', 'fixed');
        removeClass('zhan', 'show');
    }
    stickyArr.forEach(function(item, index) {
        if (scrollTop >= item.offsetTop) {
            removeClass('sticky', 'fixed');
            removeClass('zhan', 'show');
            item.classList.add('fixed');
            zhan[index].classList.add('show');
        }
    })

}

function removeClass(className, removeName) {
    let removeArr = Array.from(document.getElementsByClassName(className));
    removeArr.forEach(function(item, index) {
        item.classList.remove(removeName);
    })
}

// 滑动节流
document.addEventListener('scroll', onScroll(sticky, 10));