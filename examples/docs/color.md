<style lang="scss">

    $color-Primary          : #1ABC9C;
    $color-Primary-Light    : #4FC1B0;
    $color-Primary-Dark     : #16A085;
    $color-Info             : #3498DB;
    $color-Success          : #19be6b;
    $color-Warning          : #ff9900;
    $color-Error            : #ed3f14;
    $color-Title            : #1c2438;
    $color-Content          : #495060;
    $color-Sub              : #80848f; //辅助
    $color-Disabled         : #bbbec4;
    $color-Border           : #dddee1;
    $color-Divider          : #e9eaec;
    $color-Background       : #f8f8f9;

    .row{
        height:80px;
        margin-left:-8px;
        margin-right:-8px;
        .col-8{
            height:100%;
            padding-left:8px;
            padding-right:8px;
            width:33.3333333333%;
            line-height : 1.5;
            margin : 10px 0px;
            float : left;
            .col-box{
                &.color-Primary{
                    background : $color-Primary;
                }
                &.color-Primary-Light{
                    background : $color-Primary-Light;
                }
                &.color-Primary-Dark{
                    background : $color-Primary-Dark;
                }
                border-radius : 4px;
                height:100%;
                padding:16px;
                .color-name{
                    color: #fff;
                    font-size: 16px;
                }
                .color-desc{
                    color: #fff;
                    opacity: .7;
                }
            }
        }
        .col-6{
            height:100%;
            padding-left:8px;
            padding-right:8px;
            margin : 10px 0px;
            width:25%;
            line-height : 1.5;
            float : left;
            .col-box{
                &.color-Info{
                    background : $color-Info;
                }
                &.color-Success{
                    background : $color-Success;
                }
                &.color-Warning{
                    background : $color-Warning;
                }
                &.color-Error{
                    background : $color-Error;
                }
                
                &.color-Title{
                    background : $color-Title;
                }
                &.color-Content{
                    background : $color-Content;
                }
                &.color-Sub{
                    background : $color-Sub;
                }
                &.color-Disabled{
                    background : $color-Disabled;
                }
                &.color-Border{
                    background : $color-Border;
                }
                &.color-Divider{
                    background : $color-Divider;
                }
                &.color-Background{
                    background : $color-Background;
                }
                border-radius : 4px;
                height:100%;
                padding:16px;
                .color-name{
                    color: #fff;
                    font-size: 16px;
                }
                .color-desc{
                    color: #fff;
                    opacity: .7;
                }
            }
        }
    }


</style>

# Color 颜色
----
## 概述
推荐使用以下调色板的颜色作为原型设计规范，以保证页面和组件之间的视觉一致。

### 主色
使用活泼的绿色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。

<div class="row">
    <div class="col-8">
        <div class="col-box color-Primary">
            <div class="color-name">Primary</div>
            <div class="color-desc">#1ABC9C</div>
        </div>
    </div>
    <div class="col-8">
        <div class="col-box color-Primary-Light">
            <div class="color-name">Primary-Light</div>
            <div class="color-desc">#4FC1B0</div>
        </div>
    </div>
    <div class="col-8">
        <div class="col-box color-Primary-Dark">
            <div class="color-name">Primary-Dark</div>
            <div class="color-desc">#16A085</div>
        </div>
    </div>
</div>

### 辅助色
辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。

<div class="row">
    <div class="col-6">
        <div class="col-box color-Info">
            <div class="color-name">Info</div>
            <div class="color-desc">#3498DB</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Success">
            <div class="color-name">Success</div>
            <div class="color-desc">#19be6b</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Warning">
            <div class="color-name">Warning</div>
            <div class="color-desc">#ff9900</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Error">
            <div class="color-name">Error</div>
            <div class="color-desc">#ed3f14</div>
        </div>
    </div>
</div>

### 中性色 
中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。

<div class="row">
    <div class="col-6">
        <div class="col-box color-Title">
            <div class="color-name">Title</div>
            <div class="color-desc">#1c2438</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Content">
            <div class="color-name">Content</div>
            <div class="color-desc">#495060</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Sub">
            <div class="color-name">Sub</div>
            <div class="color-desc">#80848f</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Disabled">
            <div class="color-name">Disabled</div>
            <div class="color-desc">#bbbec4</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Border">
            <div class="color-name">Border</div>
            <div class="color-desc">#dddee1</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Divider">
            <div class="color-name">Divider</div>
            <div class="color-desc">#e9eaec</div>
        </div>
    </div>
    <div class="col-6">
        <div class="col-box color-Background">
            <div class="color-name">Background</div>
            <div class="color-desc">#f8f8f9</div>
        </div>
    </div>
</div>


