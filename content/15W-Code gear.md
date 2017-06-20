Title: 15W-Code gear
Date: 2017-06-04 21:22
Category: Course
Tags: notes, gear
Slug: 15W-Code gear
Author: 40423222

第15W上課任務

<!-- PELICAN_END_SUMMARY -->

<!-- 導入 Brython 標準程式庫 -->
 
<script src="../data/Brython-3.3.1/brython.js"></script>
<script src="../data/Brython-3.3.1/brython_stdlib.js"></script>
 
<!-- 啟動 Brython -->
<script>
window.onload=function(){
// 設定 data/py 為共用程式路徑
brython({debug:1, pythonpath:['./../data/py']});
}
</script>

## 1. 任務一:
#### 請以 W15 練習為網誌標題, 800x600 為畫布大小, 在畫布正中央畫一個半徑為 250 畫素, 壓力角 20, 齒數為 36 齒的漸開線正齒輪輪廓.
 
<!-- 以下實際利用  Brython 繪圖正齒輪-->
<canvas id="onegear" width="800" height="600"></canvas>
<div id="onegear_div" width="800" height="20"></div>
 
<script type="text/python3">
from browser import document as doc
import math
# deg 為角度轉為徑度的轉換因子
deg = math.pi/180.
# 定義 Spur 類別
class Spur(object):
    def __init__(self, ctx):
        self.ctx = ctx
 
    def create_line(self, x1, y1, x2, y2, width=3, fill="red"):
        self.ctx.beginPath()
        self.ctx.lineWidth = width
        self.ctx.moveTo(x1, y1)
        self.ctx.lineTo(x2, y2)
        self.ctx.strokeStyle = fill
        self.ctx.stroke()
    #
    # 定義一個繪正齒輪的繪圖函式
    # midx 為齒輪圓心 x 座標
    # midy 為齒輪圓心 y 座標
    # rp 為節圓半徑, n 為齒數
    # pa 為壓力角 (deg)
    # rot 為旋轉角 (deg)
    # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷
    def Gear(self, midx, midy, rp, n=20, pa=20, color="black"):
        # 齒輪漸開線分成 15 線段繪製
        imax = 15
        # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線
        self.create_line(midx, midy, midx, midy-rp)
        # 畫出 rp 圓, 畫圓函式尚未定義
        #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2)
        # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數
        # 模數也就是齒冠大小
        a=2*rp/n
        # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍
        d=2.5*rp/n
        # ra 為齒輪的外圍半徑
        ra=rp+a
        # 畫出 ra 圓, 畫圓函式尚未定義
        #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1)
        # rb 則為齒輪的基圓半徑
        # 基圓為漸開線長齒之基準圓
        rb=rp*math.cos(pa*deg)
        # 畫出 rb 圓 (基圓), 畫圓函式尚未定義
        #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1)
        # rd 為齒根圓半徑
        rd=rp-d
        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
        # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義
        #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1)
        # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小
        # 將圓弧分成 imax 段來繪製漸開線
        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
        if rd>rb:
            dr = (ra-rd)/imax
        else:
            dr=(ra-rb)/imax
        # tan(pa*deg)-pa*deg 為漸開線函數
        sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg
        for j in range(n):
            ang=-2.*j*math.pi/n+sigma
            ang2=2.*j*math.pi/n+sigma
            lxd=midx+rd*math.sin(ang2-2.*math.pi/n)
            lyd=midy-rd*math.cos(ang2-2.*math.pi/n)
            for i in range(imax+1):
                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
                if rd>rb:
                    r=rd+i*dr
                else:
                    r=rb+i*dr
                theta=math.sqrt((r*r)/(rb*rb)-1.)
                alpha=theta-math.atan(theta)
                xpt=r*math.sin(alpha-ang)
                ypt=r*math.cos(alpha-ang)
                xd=rd*math.sin(-ang)
                yd=rd*math.cos(-ang)
                # i=0 時, 繪線起點由齒根圓上的點, 作為起點
                if(i==0):
                    last_x = midx+xd
                    last_y = midy-yd
                # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點
                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)
                # 最後一點, 則為齒頂圓
                if(i==imax):
                    lfx=midx+xpt
                    lfy=midy-ypt
                last_x = midx+xpt
                last_y = midy-ypt
            # the line from last end of dedendum point to the recent
            # end of dedendum point
            # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標
            # 下列為齒根圓上用來近似圓弧的直線
            self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color)
            for i in range(imax+1):
                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
                if rd>rb:
                    r=rd+i*dr
                else:
                    r=rb+i*dr
                theta=math.sqrt((r*r)/(rb*rb)-1.)
                alpha=theta-math.atan(theta)
                xpt=r*math.sin(ang2-alpha)
                ypt=r*math.cos(ang2-alpha)
                xd=rd*math.sin(ang2)
                yd=rd*math.cos(ang2)
                # i=0 時, 繪線起點由齒根圓上的點, 作為起點
                if(i==0):
                    last_x = midx+xd
                    last_y = midy-yd
                # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點
                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)
                # 最後一點, 則為齒頂圓
                if(i==imax):
                    rfx=midx+xpt
                    rfy=midy-ypt
                last_x = midx+xpt
                last_y = midy-ypt
            # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標
            # 下列為齒頂圓上用來近似圓弧的直線
            self.create_line(lfx,lfy,rfx,rfy,fill=color)
canvas = doc['onegear']
ctx = canvas.getContext("2d")
x = (canvas.width)/2
y = (canvas.height)/2
r = 250
# 齒數
n = 36
# 壓力角
pa = 20
Spur(ctx).Gear(x, y, r, n, pa, "blue")

ctx.beginPath()
ctx.fillStytle = "#000000"
ctx.font = "40px ScriptS"
ctx.fillText("40423222",x-50,y)
ctx.stroke()

</script>



## 2. 任務二:
#### 完成後, 請在正齒輪中央寫上自己的學號, 並建立第二個 800x600 的畫布, 請畫出只有上半齒形的漸開線正齒輪輪廓 , 且該齒輪廓下方水平線, 連接兩端齒根圓點交的直線以紅色繪製, 且在齒輪下方以藍色字元寫上自己的學號.
 
<!-- 以下實際利用  Brython 繪圖半齒型正齒輪-->
<canvas id="onegear2" width="800" height="600"></canvas>
<div id="onegear_div" width="800" height="20"></div>
 
<script type="text/python3">
from browser import document as doc
import math
# deg 為角度轉為徑度的轉換因子
deg = math.pi/180.
# 定義 Spur 類別
class Spur(object):
    def __init__(self, ctx):
        self.ctx = ctx
 
    def create_line(self, x1, y1, x2, y2, width=3, fill="red"):
        self.ctx.beginPath()
        self.ctx.lineWidth = width
        self.ctx.moveTo(x1, y1)
        self.ctx.lineTo(x2, y2)
        self.ctx.strokeStyle = fill
        self.ctx.stroke()
    #
    # 定義一個繪正齒輪的繪圖函式
    # midx 為齒輪圓心 x 座標
    # midy 為齒輪圓心 y 座標
    # rp 為節圓半徑, n 為齒數
    # pa 為壓力角 (deg)
    # rot 為旋轉角 (deg)
    # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷
    def Gear(self, midx, midy, rp, n=20, pa=20, color="black"):
        # 齒輪漸開線分成 15 線段繪製
        imax = 15
        # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線
        self.create_line(midx-rp, midy, midx+rp, midy)
        # 畫出 rp 圓, 畫圓函式尚未定義
        #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2)
        # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數
        # 模數也就是齒冠大小
        a=2*rp/n
        # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍
        d=2.5*rp/n
        # ra 為齒輪的外圍半徑
        ra=rp+a
        # 畫出 ra 圓, 畫圓函式尚未定義
        #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1)
        # rb 則為齒輪的基圓半徑
        # 基圓為漸開線長齒之基準圓
        rb=rp*math.cos(pa*deg)
        # 畫出 rb 圓 (基圓), 畫圓函式尚未定義
        #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1)
        # rd 為齒根圓半徑
        rd=rp-d
        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
        # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義
        #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1)
        # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小
        # 將圓弧分成 imax 段來繪製漸開線
        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
        if rd>rb:
            dr = (ra-rd)/imax
        else:
            dr=(ra-rb)/imax
        # tan(pa*deg)-pa*deg 為漸開線函數
        sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg
        for j in range(-9,10):
            ang=-2.*j*math.pi/n+sigma
            ang2=2.*j*math.pi/n+sigma
            lxd=midx+rd*math.sin(ang2-2.*math.pi/n)
            lyd=midy-rd*math.cos(ang2-2.*math.pi/n)
            for i in range(imax+1):
                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
                if rd>rb:
                    r=rd+i*dr
                else:
                    r=rb+i*dr
                theta=math.sqrt((r*r)/(rb*rb)-1.)
                alpha=theta-math.atan(theta)
                xpt=r*math.sin(alpha-ang)
                ypt=r*math.cos(alpha-ang)
                xd=rd*math.sin(-ang)
                yd=rd*math.cos(-ang)
                # i=0 時, 繪線起點由齒根圓上的點, 作為起點
                if(i==0):
                    last_x = midx+xd
                    last_y = midy-yd
                # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點
                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)
                # 最後一點, 則為齒頂圓
                if(i==imax):
                    lfx=midx+xpt
                    lfy=midy-ypt
                last_x = midx+xpt
                last_y = midy-ypt
            # the line from last end of dedendum point to the recent
            # end of dedendum point
            # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標
            # 下列為齒根圓上用來近似圓弧的直線
            self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color)
            for i in range(imax+1):
                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
                if rd>rb:
                    r=rd+i*dr
                else:
                    r=rb+i*dr
                theta=math.sqrt((r*r)/(rb*rb)-1.)
                alpha=theta-math.atan(theta)
                xpt=r*math.sin(ang2-alpha)
                ypt=r*math.cos(ang2-alpha)
                xd=rd*math.sin(ang2)
                yd=rd*math.cos(ang2)
                # i=0 時, 繪線起點由齒根圓上的點, 作為起點
                if(i==0):
                    last_x = midx+xd
                    last_y = midy-yd
                # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點
                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)
                # 最後一點, 則為齒頂圓
                if(i==imax):
                    rfx=midx+xpt
                    rfy=midy-ypt
                last_x = midx+xpt
                last_y = midy-ypt
            # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標
            # 下列為齒頂圓上用來近似圓弧的直線
            self.create_line(lfx,lfy,rfx,rfy,fill=color)
canvas = doc['onegear2']
ctx = canvas.getContext("2d")
x = (canvas.width)/2
y = (canvas.height)/2
r = 250
# 齒數
n = 36
# 壓力角
pa = 20
Spur(ctx).Gear(x, y, r, n, pa, "blue")

ctx.beginPath()
ctx.fillStytle = "#000000"
ctx.font = "40px ScriptS"
ctx.fillText("40423222",x-50,y)
ctx.stroke()

</script>
 
 
 
## 3. 任務三
### 請各學員在各自 github 倉儲中的 data/py 目錄中, 編寫一個可以採圓心座標, 節圓半徑, 齒數, 壓力角與定位角度作為輸入的齒輪程式函式, 交由組長從各組員的 submodule 設定中呼叫導入, 以便在各分組的網頁中完成一個畫出所有組員協同繪圖的齒輪減速組圖, 且各齒輪正中心必須寫上組員學號, 各組按照學號大小排序, 分別由最右邊齒數 16 齒開始囓合, 依序增加 2 齒, 當排至平面四齒囓合後, 第五位組員則以垂直方向向下囓合兩個齒輪後, 轉由右至左水平排列, 直至所有組員均各提供一個協同囓合用的齒輪為止.
<!-- 以下實際利用  Brython 繪圖齒輪組-->

<canvas id='gear3' width='800' height='600'></canvas>
 
<script type="text/python3">
# 導入 browser 模組中的 document, 並設為 doc 變數
from browser import document as doc
import math
# deg 為角度轉為徑度的轉換因子
deg = math.pi/180.
# 定義 Spur 類別
class Spur(object):
    def __init__(self, ctx):
        self.ctx = ctx
 
    def create_line(self, x1, y1, x2, y2, width=3, fill="red"):
        self.ctx.beginPath()
        self.ctx.lineWidth = width
        self.ctx.moveTo(x1, y1)
        self.ctx.lineTo(x2, y2)
        self.ctx.strokeStyle = fill
        self.ctx.stroke()
    #
    # 定義一個繪正齒輪的繪圖函式
    # midx 為齒輪圓心 x 座標
    # midy 為齒輪圓心 y 座標
    # rp 為節圓半徑, n 為齒數
    # pa 為壓力角 (deg)
    # rot 為旋轉角 (deg)
    # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷
    def Gear(self, midx, midy, rp, n=20, pa=20, color="black"):
        # 齒輪漸開線分成 15 線段繪製
        imax = 15
        # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線
        self.create_line(midx, midy, midx, midy-rp)
        # 畫出 rp 圓, 畫圓函式尚未定義
        #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2)
        # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數
        # 模數也就是齒冠大小
        a=2*rp/n
        # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍
        d=2.5*rp/n
        # ra 為齒輪的外圍半徑
        ra=rp+a
        # 畫出 ra 圓, 畫圓函式尚未定義
        #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1)
        # rb 則為齒輪的基圓半徑
        # 基圓為漸開線長齒之基準圓
        rb=rp*math.cos(pa*deg)
        # 畫出 rb 圓 (基圓), 畫圓函式尚未定義
        #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1)
        # rd 為齒根圓半徑
        rd=rp-d
        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
        # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義
        #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1)
        # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小
        # 將圓弧分成 imax 段來繪製漸開線
        # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
        if rd>rb:
            dr = (ra-rd)/imax
        else:
            dr=(ra-rb)/imax
        # tan(pa*deg)-pa*deg 為漸開線函數
        sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg
        for j in range(n):
            ang=-2.*j*math.pi/n+sigma
            ang2=2.*j*math.pi/n+sigma
            lxd=midx+rd*math.sin(ang2-2.*math.pi/n)
            lyd=midy-rd*math.cos(ang2-2.*math.pi/n)
            for i in range(imax+1):
                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
                if rd>rb:
                    r=rd+i*dr
                else:
                    r=rb+i*dr
                theta=math.sqrt((r*r)/(rb*rb)-1.)
                alpha=theta-math.atan(theta)
                xpt=r*math.sin(alpha-ang)
                ypt=r*math.cos(alpha-ang)
                xd=rd*math.sin(-ang)
 
                yd=rd*math.cos(-ang)
                # i=0 時, 繪線起點由齒根圓上的點, 作為起點
                if(i==0):
                    last_x = midx+xd
                    last_y = midy-yd
                # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點
                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)
                # 最後一點, 則為齒頂圓
                if(i==imax):
                    lfx=midx+xpt
                    lfy=midy-ypt
                last_x = midx+xpt
                last_y = midy-ypt
            # the line from last end of dedendum point to the recent
            # end of dedendum point
            # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標
            # 下列為齒根圓上用來近似圓弧的直線
            self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color)
            for i in range(imax+1):
                # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd
                if rd>rb:
                    r=rd+i*dr
                else:
                    r=rb+i*dr
                theta=math.sqrt((r*r)/(rb*rb)-1.)
                alpha=theta-math.atan(theta)
                xpt=r*math.sin(ang2-alpha)
                ypt=r*math.cos(ang2-alpha)
                xd=rd*math.sin(ang2)
                yd=rd*math.cos(ang2)
                # i=0 時, 繪線起點由齒根圓上的點, 作為起點
                if(i==0):
                    last_x = midx+xd
                    last_y = midy-yd
                # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點
                self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color)
                # 最後一點, 則為齒頂圓
                if(i==imax):
                    rfx=midx+xpt
                    rfy=midy-ypt
                last_x = midx+xpt
                last_y = midy-ypt
            # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標
            # 下列為齒頂圓上用來近似圓弧的直線
            self.create_line(lfx,lfy,rfx,rfy,fill=color)
 
# 準備在 id="gear3" 的 canvas 中繪圖
canvas = doc["gear3"]
ctx = canvas.getContext("2d")
 
# 模數決定齒的尺寸大小, 囓合齒輪組必須有相同的模數與壓力角
# 壓力角 pa 單位為角度
pa = 20
# 第1齒輪齒數
n_g1 = 16
# 第2齒輪齒數
n_g2 = 18
# 第3齒輪齒數
n_g3 = 20
# 第4齒輪齒數
n_g4 = 22
# m 為模數, 根據畫布的寬度, 計算適合的模數大小
m = (0.8*canvas.width)/(n_g1+n_g2+n_g3+n_g4)
# 根據模數 m, 計算各齒輪的節圓半徑
rp_g1 = m*n_g1/2
rp_g2 = m*n_g2/2
rp_g3 = m*n_g3/2
rp_g4 = m*n_g4/2
#單一正齒輪繪圖呼叫格式 Spur(ctx).Gear(x, y, r, n, pa, "blue")
# 開始繪製囓合齒輪輪廓
# 繪圖第1齒輪的圓心座標, 因為希望繪圖佔去 canvas.width 的 80%, 所以兩邊各預留 10% 距離
x_g1 = canvas.width*0.1+rp_g1
# y 方向繪圖區域上方預留 canvas.height 的 20%
y_g1 = canvas.height*0.2+rp_g1
# 第2齒輪的圓心座標, 假設排列成水平, 表示各齒輪圓心 y 座標相同
x_g2 = x_g1 + rp_g1 + rp_g2
y_g2 = y_g1
# 第3齒輪的圓心座標
x_g3 = x_g1 + rp_g1 + 2*rp_g2 + rp_g3
y_g3 = y_g1
# 第4齒輪的圓心座標
x_g4 = x_g1 + rp_g1 + 2*rp_g2 + 2*rp_g3+rp_g4
y_g4 = y_g1
 
# 將第1齒輪順時鐘轉 90 度, 也就是 math.pi/2
# 使用 ctx.save() 與 ctx.restore() 以確保各齒輪以相對座標進行旋轉繪圖
ctx.save()
# translate to the origin of second gear
ctx.translate(x_g1, y_g1)
# rotate to engage
ctx.rotate(math.pi/2)
# put it back
ctx.translate(-x_g1, -y_g1)
# 繪製第一個齒輪輪廓
Spur(ctx).Gear(x_g1, y_g1, rp_g1, n_g1, pa, "blue")
ctx.restore()

ctx.beginPath()
ctx.fillStytle = "#0000ff"
ctx.font = "20px ScriptS"
ctx.fillText("40423222",x_g1-30,y_g1)
ctx.stroke()
 
# 將第2齒輪逆時鐘轉 90 度之後, 再多轉一齒, 以便與第1齒輪進行囓合
ctx.save()
# translate to the origin of second gear
ctx.translate(x_g2, y_g2)
# rotate to engage
ctx.rotate(-math.pi/2-math.pi/n_g2)
# put it back
ctx.translate(-x_g2, -y_g2)
Spur(ctx).Gear(x_g2, y_g2, rp_g2, n_g2, pa, "black")
ctx.restore()

ctx.beginPath()
ctx.fillStytle = "#000000"
ctx.font = "20px ScriptS"
ctx.fillText("40423228",x_g2-30,y_g2)
ctx.stroke()
 
# 將第3齒輪逆時鐘轉 90 度之後, 再往回轉第2齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第2齒輪進行囓合
ctx.save()
# translate to the origin of second gear
ctx.translate(x_g3, y_g3)
# rotate to engage
# math.pi+math.pi/n_g2 為第2齒輪從順時鐘轉 90 度之後, 必須配合目前的標記線所作的齒輪 2 轉動角度, 要轉換到齒輪3 的轉動角度
# 必須乘上兩齒輪齒數的比例, 若齒輪2 大, 則齒輪3 會轉動較快
# 第1個 -math.pi/2 為將原先垂直的第3齒輪定位線逆時鐘旋轉 90 度
# -math.pi/n_g3 則是第3齒與第2齒定位線重合後, 必須再逆時鐘多轉一齒的轉角, 以便進行囓合
# (math.pi+math.pi/n_g2)*n_g2/n_g3 則是第2齒原定位線為順時鐘轉動 90 度, 
# 但是第2齒輪為了與第1齒輪囓合, 已經距離定位線, 多轉了 180 度, 再加上第2齒輪的一齒角度, 因為要帶動第3齒輪定位, 
# 這個修正角度必須要再配合第2齒與第3齒的轉速比加以轉換成第3齒輪的轉角, 因此乘上 n_g2/n_g3
ctx.rotate(-math.pi/2-math.pi/n_g3+(math.pi+math.pi/n_g2)*n_g2/n_g3)
# put it back
ctx.translate(-x_g3, -y_g3)
Spur(ctx).Gear(x_g3, y_g3, rp_g3, n_g3, pa, "red")
ctx.restore()

ctx.beginPath()
ctx.fillStytle = "#ff0000"
ctx.font = "20px ScriptS"
ctx.fillText("40423245",x_g3-30,y_g3)
ctx.stroke()

# 將第4齒輪逆時鐘轉 90 度之後, 再往回轉第3齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第3齒輪進行囓合
ctx.save()
# translate to the origin of second gear
ctx.translate(x_g4, y_g4)
# rotate to engage
ctx.rotate(-math.pi/2-math.pi/n_g4+(math.pi+math.pi/n_g2)*n_g2/n_g3+(math.pi+math.pi/n_g3)*n_g3/n_g4)
# put it back
ctx.translate(-x_g4, -y_g4)
Spur(ctx).Gear(x_g4, y_g4, rp_g4, n_g4, pa, "green")
ctx.restore()

ctx.beginPath()
ctx.fillStytle = "#008000"
ctx.font = "20px ScriptS"
ctx.fillText("40423248",x_g4-30,y_g4)
ctx.stroke()
</script>



## 4. 任務四
### 請依照上述規劃, 在 Onshape 完成相同齒輪組的囓合協同繪圖.
### <span style="background-color: #ffff00">對圖片點擊左鍵</span>
<a href="https://cad.onshape.com/documents/ab601e077ae7eeacfe932166/w/a6bdf68709f08434ce7583f1/e/ce38b0d12b0cd5c3b73e583c">
<img src="./../data/W15/gear-16_18_20_22.png" width="800" / title="點擊左鍵"></a>


## 5. 任務五
### 各組員與組員請同時用 Youtube 與 vimeo, 紀錄上述各階段程式編寫與繪圖配置的 mp4 影片檔案, 標題為"協同產品設計實習第十五週練習"<br><br><span style="background-color: #ffff00">但因為製作速度比拍影片快和輕鬆,也不怕網路不給利而Lag,再加上找起重點比看<br><br>影片簡單,所以我決定不製作影片,而來製作筆記</span>
<pre class="brush: python">
## Code gear

### 開頭
主要是以下程式的名稱
<!-- 以下實際利用  Brython 繪圖正齒輪-->
可改變名稱,不引響程式內容
<!-- 以下實際利用  Brython 繪圖半齒型正齒輪-->

### 顯示齒數跟範圍
齒輪外齒顯示的範圍,顯示的齒數,由圓心垂直線向右長出
第行92 for j in range(n):   n = 齒數
參考 for j in range(-9,10,+1):

顯示全部樣貌(因為36為全部的齒數)
for j in range(36):

注意: 不能輸入負值
for j in range(-9):

可以輸入36(總齒數)以上的數量
for j in range(50):

### 控制左右方向長出的齒量

-3為向左長出3,3為向右長出3
for j in range(-3,3):

注意: 如果都輸入正數,會以右邊為顯示左邊為消除
因為左邊大於右邊,所以全消光
for j in range(7,3):

注意: 如果都輸入負數,會以左邊為顯示右邊為消除
顯示左7個齒,但會消去起點延伸的3個齒
for j in range(-7,-3):

注意: 不能左正右負
for j in range(7,-3):

疑問: 為何在最後要+1
for j in range(-9,10,+1):


### 設定 半徑/齒數/壓力角
第157~161行
r = 250
# 齒數
n = 36
# 壓力角
pa = 20

r = 半徑
n = 齒數
pa = 壓力角

疑問: r是代表齒輪的哪個半徑?
是 節圓半徑? 齒底半徑? 齒高半徑? ????


### 齒輪名稱
第177行 <canvas id="onegear2" width="800" height="600"></canvas>
這就是名稱
id="onegear2"
這名稱要跟第301行canvas = doc['onegear2']
名稱onegear2要對到 注意: 沒對到就不會顯示

注意: 要是名稱跟上方齒輪一樣會重疊
<canvas id="onegear" width="800" height="600"></canvas>
canvas = doc['onegear']


### 控制紅線位置
第209行 self.create_line(midx-rp, midy, midx, midy)
有一到四格,順序為 x / y / x / y
rp為長出,輸入一個rp,就會長出一個rp個長度,rp為一個值
正負決定方向
在midx +rp為向右長出,-rp為向左長出
在midy +rp為向下長出,-rp為向上長出

注意: 只能長出一條線,所以要是對midx and midy輸入rp
就會長出斜線
self.create_line( midx-rp, midy+rp, midx, midy)
說明: 以圓心出發,x向左一個rp,y向下一個rp,到達的這位置為終點
,以圓心連到終點,完成此線

同時對兩個midx or midy輸入相同正負號的rp,是不會顯示紅線
self.create_line( midx, midy+rp, midx, midy+rp)

# 組合齒輪
在
canvas = doc["gear3"]
ctx = canvas.getContext("2d")
下方開始設定齒輪

### 壓力角
每個齒輪的壓力角都一樣
pa = 20

### 齒數
齒輪一到齒輪四的齒數
n_g1 = 16
n_g2 = 18
n_g3 = 20
n_g4 = 22

### 模數
模數定義: D(節圓直徑)/T(齒數),模數相同的齒輪才能憶起配合
說明: m 為模數, 根據畫布的寬度(800), 計算適合的模數大小
m = (0.8*canvas.width)/(n_g1+n_g2+n_g3+n_g4)

### 節圓半徑
m(模數)*T(齒數) = D(節圓直徑)
說明: 所以m(模數)*T(齒數)/2(切半) = D/2(節圓半徑)
rp_g1 = m*n_g1/2
rp_g2 = m*n_g2/2
rp_g3 = m*n_g3/2
rp_g4 = m*n_g4/2

### 圓心座標
先定義出齒一圓心
說明: 繪圖第1齒輪的圓心座標, 因為希望繪圖佔去 canvas.width 
說明: 的 80%, 所以兩邊各預留 10% 距離
x_g1 = canvas.width*0.1+rp_g1
說明: y 方向繪圖區域上方預留 canvas.height 的 20%
y_g1 = canvas.height*0.2+rp_g1

接著依序下去,注意: 每個圓心都要保持水平,都要是為y_g1
說明: 第2齒輪的圓心座標, 假設排列成水平, 表示各齒輪圓心 y 座標相同
x_g2 = x_g1 + rp_g1 + rp_g2
y_g2 = y_g1
說明: 第3齒輪的圓心座標
x_g3 = x_g1 + rp_g1 + 2*rp_g2 + rp_g3
y_g3 = y_g1
說明: 第4齒輪的圓心座標
x_g4 = x_g1 + rp_g1 + 2*rp_g2 + 2*rp_g3+rp_g4
y_g4 = y_g1

### 組合
將一到四的齒輪組合,並簽上學號
說明: 將第1齒輪順時鐘轉 90 度, 也就是 math.pi/2
說明: 使用 ctx.save() 與 ctx.restore() 以確保各齒輪以相對座標進行旋轉繪圖
ctx.save()
說明: translate to the origin of second gear
ctx.translate(x_g1, y_g1)
說明: rotate to engage
ctx.rotate(math.pi/2)
說明: put it back
ctx.translate(-x_g1, -y_g1)
繪製第一個齒輪輪廓
Spur(ctx).Gear(x_g1, y_g1, rp_g1, n_g1, pa, "blue")
ctx.restore()

ctx.beginPath()
ctx.fillStytle = "#0000ff"
ctx.font = "20px ScriptS"
ctx.fillText("40423222",x_g1-30,y_g1)
ctx.stroke()
 
將第2齒輪逆時鐘轉 90 度之後, 再多轉一齒, 以便與第1齒輪進行囓合
ctx.save()
translate to the origin of second gear
ctx.translate(x_g2, y_g2)
rotate to engage
ctx.rotate(-math.pi/2-math.pi/n_g2)
說明: put it back
ctx.translate(-x_g2, -y_g2)
Spur(ctx).Gear(x_g2, y_g2, rp_g2, n_g2, pa, "black")
ctx.restore()

ctx.beginPath()
ctx.fillStytle = "#000000"
ctx.font = "20px ScriptS"
ctx.fillText("40423228",x_g2-30,y_g2)
ctx.stroke()
 
說明: 將第3齒輪逆時鐘轉 90 度之後, 再往回轉第2齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第2齒輪進行囓合
ctx.save()
說明: translate to the origin of second gear
ctx.translate(x_g3, y_g3)
說明: rotate to engage
說明: math.pi+math.pi/n_g2 為第2齒輪從順時鐘轉 90 度之後, 必須配合目前的標記線所作的齒輪 2 轉動角度, 要轉換到齒輪3 的轉動角度
說明: 必須乘上兩齒輪齒數的比例, 若齒輪2 大, 則齒輪3 會轉動較快
說明: 第1個 -math.pi/2 為將原先垂直的第3齒輪定位線逆時鐘旋轉 90 度
說明: -math.pi/n_g3 則是第3齒與第2齒定位線重合後, 必須再逆時鐘多轉一齒的轉角, 以便進行囓合
說明: (math.pi+math.pi/n_g2)*n_g2/n_g3 則是第2齒原定位線為順時鐘轉動 90 度, 
說明: 但是第2齒輪為了與第1齒輪囓合, 已經距離定位線, 多轉了 180 度, 再加上第2齒輪的一齒角度, 因為要帶動第3齒輪定位, 
說明: 這個修正角度必須要再配合第2齒與第3齒的轉速比加以轉換成第3齒輪的轉角, 因此乘上 n_g2/n_g3
ctx.rotate(-math.pi/2-math.pi/n_g3+(math.pi+math.pi/n_g2)*n_g2/n_g3)
說明: put it back
ctx.translate(-x_g3, -y_g3)
Spur(ctx).Gear(x_g3, y_g3, rp_g3, n_g3, pa, "red")
ctx.restore()

ctx.beginPath()
ctx.fillStytle = "#ff0000"
ctx.font = "20px ScriptS"
ctx.fillText("40423245",x_g3-30,y_g3)
ctx.stroke()

說明: 將第4齒輪逆時鐘轉 90 度之後, 再往回轉第3齒輪定位帶動轉角, 然後再逆時鐘多轉一齒, 以便與第3齒輪進行囓合
ctx.save()
說明: translate to the origin of second gear
ctx.translate(x_g4, y_g4)
說明: rotate to engage
ctx.rotate(-math.pi/2-math.pi/n_g4+(math.pi+math.pi/n_g2)*n_g2/n_g3+(math.pi+math.pi/n_g3)*n_g3/n_g4)
說明: put it back
ctx.translate(-x_g4, -y_g4)
Spur(ctx).Gear(x_g4, y_g4, rp_g4, n_g4, pa, "green")
ctx.restore()

ctx.beginPath()
ctx.fillStytle = "#008000"
ctx.font = "20px ScriptS"
ctx.fillText("40423248",x_g4-30,y_g4)
ctx.stroke()



## Oshape
在這我是使用正齒輪

### 齒輪的基本設定
模數都為(800*0.8)/(16+18+20+22) = 8.421
孔洞都為直徑20mm
壓力角都為20度
齒厚度為10mm
第一齒輪到第四齒輪的齒數為
n = 16 / 18 / 20 / 22

### 距離
第一齒輪到第四齒輪的節圓直徑為
D = 134.736 mm / 151.578 mm / 168.42 mm / 185.262 mm
節圓半徑用來計算齒輪跟齒輪的距離
例如: 134.736/2+151.578/2 = 齒輪一的圓心到齒輪二的圓心之距離

### 齒的接合
注意: 為了齒輪可以互相接合(不發生干涉)
所以要轉動 = 360(圓的角度)/(T(齒數)*2) = 一齒半的角度

### 速比
不同齒數的齒輪配合,就會產生速比
就像是第一齒輪被第二齒輪,速比就是18(齒數)/20(齒數) = 0.889



來寫個不同的模數,這樣就可以有... 做不到,因為節圓長度是用
畫布的寬來定義的

買滑鼠

齒輪圓心以下太佔空間了,便跟畫布高度跟圓心

關比指令來顯示筆記
</pre>



## 參考對象45:
<a href="https://40423245.github.io/2017springcd_hw/blog/2017spring-cd-W15.html">https://40423245.github.io/2017springcd_hw/blog/2017spring-cd-W15.html</a>