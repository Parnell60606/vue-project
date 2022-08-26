/**
 * js 文件下使用這個做類型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */


// 淡褐色
const lightBrown = "#F0F0EAFF"


const themeOverrides = {
    common: {
        // primaryColor: '#F0F0EA'
        // primaryColor: '#A05C18FF' //  深褐色
        primaryColor: '#F1C661FF' //  金色  

    },
    Layout: {
        // "textColor": "#A05C18FF", // 深褐色
        // "textColor": "#464646FF", // 深灰色

        "textColor": "#363B4B",  // 深藍色  (topbar顏色)

        "textColorInverted": "rgba(152, 58, 87, 1)"
    },
    Button: {
        // textColor: '#FF0000'
        textColor: '#ffffff',
        "colorHover": "#FF000000",
        "borderHover": "1px solid #aaffff",


    },
    "Tabs": {
        // "colorSegment": "rgba(0, 0, 255, 1)",
        // "tabTextColorBar": "#E1A71EFF", // 金色
        "tabTextColorBar": "#AFB3BBFF", // 灰藍色
        "tabTextColorActiveBar": "#F1C661FF",
        "tabTextColorHoverBar": "#9CC0D3FF"   // hover變藍
    },
    "Divider": {

        // "textColor": "rgba(100, 100, 100, 1)", // 分隔線文字顏色
        "textColor": "#363B4Baa", // 分隔線文字顏色 - 深藍
        // "textColor": "#A05C18FF", // 分隔線文字顏色 - 深褐色
        // "textColor": "#F1C661", // 分隔線文字顏色 - 金色
        // "color": "#363B4Baa" // TOPBAR的深藍
        "color": "rgba(238, 230, 214, 1)", // 分隔線文字顏色 - 金色



    },
    "Dialog": {
        "padding": "50px 40px 40px 50px",
        "borderRadius": "15px"

    },
    "Card": {
        // "colorModal": lightBrown,
        "colorModal": "#FFFFFFDD",
        "borderRadius": "15px"
    },
    // 彈出訊息 (對話框)
    "Popover": {
        "color": "#363B4B88",
        "boxShadow": "0",
        "dividerColor": "rgb(239, 239, 245)",
        "textColor": "rgba(255, 255, 255, 1)",
        "padding": "12px 24px",
        "borderRadius": "10px"

    },
    Select: {
        peers: {
            InternalSelection: {
                textColor: '#FF0000'
            }
        }
    }
    // ...
}

// Naive UI 右下角調整主題變量

export default themeOverrides