<script>
    export default {
        data () {
            return {
              value1 : 123
            }
        }
    }
</script>
# Input 输入框
----
### 基础用法

<div class="demo-block">
  <h-input style="width:300px;" v-model="value1" type="box"></h-input>
</div>

::: demo
```html
  <h-input style="width:300px;"></h-input>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |