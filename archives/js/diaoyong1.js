// 获取div元素
var contentDiv = document.getElementById("chehuanlan");

// 添加更多的HTML内容
var cardHtml = `
<div class="mdui-appbar mdui-shadow-0 mdui-appbar-scroll-hide mdui-appbar-fixed text-center">
        <div class="mdui-toolbar">
            <a href="javascript:;" class="mdui-btn mdui-btn-icon" mdui-drawer="{target: '#left-drawer'}">
                <i class="mdui-icon material-icons">menu</i>
            </a>
            <a href="javascript:;" class="mdui-typo-title">YMH♡DZY</a>
            <div class="mdui-toolbar-spacer"></div>

            <a href="javascript:mdui.alert('QQ:914933408<br>版本:20231001<br>网站还在开发中，可能不完善，抱歉!','关于');" class="mdui-btn mdui-btn-icon">

                <i class="mdui-icon material-icons">more_vert</i>
            </a>
        </div>
    </div>
    <div class="mdui-drawer-bkody-left mdui-drawer text-center" id="left-drawer">
        <br><br><br>
        <img class="text-center mdui-img-circle" src="http://q2.qlogo.cn/headimg_dl?dst_uin=914933408&spec=100" />
        <br><br>
        <a href="./index.html" class="p-2 w-75 btn btn-outline-dark shou" role="button" aria-pressed="true">搜索</a>
        <br><br>
        <a href="#" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons che">&#xe88a;</i> 首页
        </a><br>
        <a href="./ietm.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe2bc;</i> 代办
        </a>
        <br>
        <a href="./index.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe85d;</i> 故事
        </a>
        <br>
        <a href="./time.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe01b;</i> 时光
        </a>
        <br>
        <a href="./category.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe5c3;</i> 相册
        </a>
        <br
        <br> 
         <a href="./404.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe001;</i> 关于
        </a>
        <HR style="FILTER: alpha(opacity=100,finishopacity=0,style=0)" width="60%" color=#FFFFFF SIZE=1>
        <p>Other</p>
        <a href="./suisuiread.html" class="btn btn-outline-dark" role="button" aria-pressed="true" style="border-color: rgba(0, 0, 0, 0.0);">
            <i class="mdui-icon material-icons">&#xe87e;</i> 碎碎念
        </a>
        <br>
    </div>
    <script>
    window.addEventListener('load', function() {
        // 检测屏幕宽度
        var screenWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // 如果是电脑端宽度（大于等于 768px），则激活 mdui-drawer
        if (screenWidth >= 768) {
            new mdui.Drawer('#left-drawer');
        }
    });
</script>
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;


// 获取div元素
var contentDiv = document.getElementById("footer");

// 添加更多的HTML内容
var cardHtml = `
 <div class="crd text-center">
        <div class="card-body">
            <p>Copyright © by DZY All Rights Reserved 2023.</p>
        </div>
    </div>
    
    
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;




// 获取div元素
var contentDiv = document.getElementById("pl");

// 添加更多的HTML内容
var cardHtml = `

<div id="waline"></div>
  <script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

    init({
      el: '#waline',
      serverURL: 'https://ejcomment.netlify.app//.netlify/functions/comment',
    });
  </script>
    
    
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;


// 获取div元素
var contentDiv = document.getElementById("Details");

// 添加更多的HTML内容
var cardHtml = ` <div class="card m-2">
  <div class="card-body">
    <h6>发布时间:2023.8.2</h6>
  
            </script>本站总访问量<span id="busuanzi_value_site_pv"></span>次！
  </div>
</div>
    
    <div class="alert alert-info m-2" role="alert">
        发表违反中华人民共和国法律,不良广告，辱骂等内容，后果自负！
    </div>
    
    `;

// 将生成的HTML内容添加到div元素中
contentDiv.innerHTML = cardHtml;