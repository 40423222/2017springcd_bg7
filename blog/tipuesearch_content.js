var tipuesearch = {"pages":[{"text":"2017Spring 機械設計工程系協同產品設計實習 第七組協同倉儲 課程倉儲: https://github.com/40423222/2017springcd_bg7 課程投影片 https://40423222.github.io/2017springcd_bg7/ 課程網誌:： http://40423222.github.io/2017springcd_bg7/blog/ 組員倉儲： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員網誌： 40423202 40423221 40423222 40423228 40423245 40423248 40423251 組員投影片： 40423202 40423221 40423222 40423228 40423245 40423248 40423251","tags":"misc","url":"./pages/about/","title":"About"},{"text":"以下為協同產品設計實習的期末計畫 計畫流程 - (建立)2017/5/16 1. 討論要繪畫何種步行機構 原本是要製作四角步行者,但因為構造過於簡單,而淘汰,最後決定繪畫 8連桿 的仿生獸 四角步行者,結構不穩定 2017-05-12_21-45-50 from 40423245 on Vimeo . 仿生獸 仿生獸 from phymec on YouTube . 2. 用Onshape繪畫出仿生獸的初步構造 繪畫8連桿,來組裝出仿生獸,最後完成初步樣貌 用Onshape觀看仿生獸 組裝重點 仿生獸-組裝重點 from 40423222 on Vimeo . 初步完成 仿生獸-初步完成 from 40423222 on Vimeo . 3. 用V-rep模擬出在地板行走的影片 來確認哪裡需要改良 用V-rep模擬仿生獸 2017-05-16_21-47-51 from 40423245 on Vimeo . 4. 組長/45號/48號,用厚紙板製作出實體,用於裝馬達測試","tags":"Course","url":"./期末計畫-行走機構.html","title":"期末計畫-行走機構"},{"text":"以下為用Onshape繪畫漸開線齒輪,並組裝和模擬, 繪畫漸開線齒輪: 繪畫漸開線齒輪 from 40423222 on Vimeo . 個人筆記的一小部分: 例題二 設定 節圓直徑35 齒數10 所以 35/10 = 3.5模數 所以畫出節圓35 以節圓 向外畫3.5為齒高(因為模數為3.5) 向內畫3.8為齒底(要多0.3的空隙 這0.3要查表而知) 畫相切節圓的切線 在畫通過切線跟節圓的線 並跟切線夾20度 20度就是壓力角 以圓心畫圓相切這壓力線 這就是假想圓或稱基圓 壓力線在齒頂圓跟假想圓的長度為13.06 以這兩端點連向圓心 以壓力線為起點 假想圓長度 要等於 13.06 2 PI R/x = 13.06 R = 假想圓半徑 x = 要求y的值 = 7.9075 360/x = y y就是假想圓的角度 = 45.526615 這樣假想圓的就是14.295 以5等分來劃出漸開線 9.105323 每下一條件開線 都要小20%壓力線的長度 因為是5等分 所以每次都要小20% 把齒一到中上位置 角度是9 因為有10齒 360/20 = 18 18的一半 = 9 因為10齒+空的10齒 = 200 所以才要除20 組裝跟測試結果: Onshape漸開線齒輪 from 40423222 on Vimeo . 觀看零件: 點擊圖片 參考對象: https://www.youtube.com/watch?v=PXdk3sbK-ZM","tags":"Course","url":"./漸開線齒輪.html","title":"漸開線齒輪"},{"text":"想了解Arduino Uno板的實驗,請到40423222的個人網誌 有詳細的Arfuino說明 40423222的個人網誌","tags":"Arduino","url":"./Arduino.html","title":"Arduino"},{"text":"以下為協同產品設計實習 2017 Spring 期中考週的實習查驗題目 期中考任務 (一) Fossil Server 實習查驗 建立一台以 https 為連結協定的 Fossil Server (起始 Timeline 必須為期中考當天日期與時間為準), 並命名乙班第7組為 bg7 期中報告,為 server 標題, 每一組員以學號為帳號, 各組員分別在 Wiki 中以 [學號] 期中學習心得\"命名 (例如: 40423222 期中學習心得) 為 Wiki 頁面標題, 概述上課至今的心得與自評成績. 完成後, 請報上各組 Serve 的 ip 位址進行查驗. (二) 四連桿機構協同 Trace Point 查驗 可來參考 電腦輔助設計實習第十週上課內容 , 在各組網誌中, 以子模組 (Github Submodule) 的設定, 擷取各組員倉儲中的 T 點軌跡座標檔 (請以 midterm1.csv, midterm2.csv .... 依序命名) 後進行網際協同繪圖. 各組組員請依學號遞增排序, 排序第1者負責分析 Length=50 的 T 點軌跡圖, 其餘組員則依序將 Length -5, 分別在各組網誌中列出所有組員所完成的四連桿 T 點運動軌跡圖. (例如: 第2位組員負責 Length=45 的四連桿分析, 第3位則負責 Length=40 ....) 例如: (長 30 mm 的連桿為馬達輸入桿, Trace Point 為 T 點) 40423222協同產品設計實習W9-fourbar link 50 點分析 from 40423222 on Vimeo . window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/cadpa_w10_4bar.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() (三) Fourbar Walker OnShape 零件協同繪圖與組立查驗 請各組依照下列基本尺寸規劃, 以協同方式在 OnShape 環境中完成四連桿四足行走機構, 並分別拍攝協同規劃與實際操作影片, 將影片送到 1) Youtube 2) Vimeo 以及各組的 Fossil Server 基本尺寸規劃 完成圖 (零件連結) 40423222協同產品設計實習W9-Fourbar Walker OnShape 零件協同繪圖與組立查驗 from 40423222 on Vimeo . (四) 分組協同零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/Fourbar Walker.stl', // data path path: './../data/madeleine/src/' // path to source directory from current html file }); }; select stl file: or drop stl file","tags":"Course","url":"./midterm-collaboration-evaluation.html","title":"2017/04/19 期中協同查驗與自評"},{"text":"以下為bg7小組組長的內容(20170427,1:19): 心得與自評 心得與自評: 在評分前的這最後一天,將近五個小時的奮鬥,終於將bg7_W1~W8都補上了. 雖然大多時間都是在Ctrl+C and Ctrl+V,但我至少會挑選,選做得好的組員,來Ctrl+C and Ctrl+V. 對於這種 不放棄的精神 ,我認為拿個60分,很合理,","tags":"Course","url":"./2017spring-cd-W8.html","title":"2017/04/12 第八週"},{"text":"以下為bg7小組組長總合出的bg7_W7內容: 利用emd對Fossil倉儲進行管理 ; 用Onshape繪製八連桿 ; 將八連桿匯入V-rep並模擬 ; 影片區 利用emd對Fossil倉儲進行管理: 利用以下指令對fossil倉儲進行管理 fossil clone uri foo.fossil (將遠端的倉儲下載下來) fossil open ./../../foo.fossil (將下載下來的倉儲打開) fossil add . (將改版的倉儲推至暫存區) fossil remote-url off (將自動推送改為手動，這是與git不同之處，fossil會自動推送) fossil push https://user@192.168.X.XX (將暫存區的檔案推至遠端) 用Onshape繪製八連桿: 用參數指令繪製零件 並利用轉動指令及緊固指令將八連桿組立起來 將八連桿匯入V-rep並模擬: 與四連桿相同，只不過這次加入了更多的Dummy，因此在其從屬關係上須特別小心。 影片區: 40423228 (1).零件 20170405 part1 from 40423228 on Vimeo . (2).零件 20170405 part2 from 40423228 on Vimeo . (3).組合 20170405 part3 from 40423228 on Vimeo . (4).組合 20170405 part4 from 40423228 on Vimeo . 40423245 1. 利用fossil對倉儲進行管理練習 40423245機械設計工程系 - 協同產品設計實習課程W7-利用fossil對倉儲進行管理練習 from 40423245 on Vimeo . 2. 利用Onshape繪製八連桿 40423245機械設計工程系 - 協同產品設計實習課程W7-利用Onshape繪製八連桿 from 40423245 on Vimeo . 3. 將八連桿匯入V-rep並使其作動 40423245機械設計工程系 - 協同產品設計實習課程-W7-將八連桿匯入V-rep並使其作動 from 40423245 on Vimeo .","tags":"Course","url":"./2017spring-cd-W7.html","title":"2017/04/05 第七週"},{"text":"以下為bg7小組組長總合出的bg7_W6內容: 用Onshape的變數指令繪製四連桿 ; 將四連桿匯入V-rep模擬 ; 影片區 用Onshape的變數指令繪製四連桿: 在Onshape裡建立一個新文件，並設定好參數設定 接著繪製草圖，在標註尺寸時利用#+參數名稱加入設定好的參數，並將其擠出為零件 接著在組合件裡匯入零件，並利用 指令組立桿子，利用 指令組立軸 零件連結 ： Onshape四連桿機構 將四連桿匯入V-rep模擬: 將組立好的四連桿轉出stl，並匯入V-rep，將各個零件分開，加入旋轉軸，加入馬達，將桿子設為動態物件後，設好從屬關係。 接著新增兩個Dummy 並設定兩個Dummy的關係Dynamics 影片區: 20170329四連桿 from 40423228 on Vimeo . 40423245機械設計工程系 - 協同產品設計實習課程-W6上課練習 from 40423245 on Vimeo . 2017CD 第六週 from 40423248 on Vimeo .","tags":"Course","url":"./2017spring-cd-W6.html","title":"2017/03/29 第六週"},{"text":"以下為bg7小組組長總合出的bg7_W5內容: 在Fossil主頁上顯示筆記 ; V-rep模擬單連趕 ; 影片區 在Fossil主頁上顯示筆記: 在wiki新增一個與倉儲同名稱的筆記，即可在fossil倉儲主頁上顯示這筆記內容 Note : 要是在Wiki上建立了,多餘的筆記,只要用修改,把內容全Delete,這筆記就會看不見 (但還是會有紀錄) V-rep模擬單連趕: 將上週的單連桿帶入V-rep模擬 接著利用Divide selected shapes將單連桿的零件分開 利用Add/Joint/Revolute新增一個旋轉軸 將旋轉軸的位置跟繪製的軸合併再一起 設置好各零件的從屬關係 接著設定旋轉軸的角速度，並固定單連桿 接著將桿子設為動態物件 影片區: 40423228 20170322 單連桿vrep作動 from 40423228 on Vimeo . 0322 四連桿 part1 from 40423228 on Vimeo . 20170322 四連桿 part2 from 40423228 on Vimeo . 40423245 40423245機械設計工程系 - 協同產品設計實習課程-W5上課練習 from 40423245 on Vimeo . 40423245機械設計工程系 - 協同產品設計實習課程-W5回家練習 from 40423245 on Vimeo .","tags":"Course","url":"./2017spring-cd-W5.html","title":"2017/03/22 第五週"},{"text":"以下為bg7小組組長總合出的bg7_W4內容: Fossil的組員之新增和權限設定 ; Onshape繪製單連桿機構並轉出stl檔案 ; solvespace繪製單連桿機構並轉出stl檔案 ; 影片區 Fossil的組員之新增和權限設定: Fossil小組倉儲: cdbg7 登入Fossil後,如果你的身分有Setup或是Admin,來到admin/user/add這裡可新增成員跟給定全線 Onshape繪製單連桿機構並轉出stl檔案: 繪製出所需零件 ，底座、軸及單連桿，並將其組立起來 Onshape單連桿機構 solvespace繪製單連桿機構並轉出stl檔案: 繪製出所需零件 ，底座、軸及單連桿，並將其組立起來 影片區: 40423228 0315單連桿-OnShape from 40423228 on Vimeo . 0315單連桿-SolveSpace from 40423228 on Vimeo . 40423245 1. Fossil新增組員以及組員權限設定 Fossil新增組員 2. 在Onshape繪製單連桿機構並轉出stl檔案 Onshape單連桿機構 3. 在solvespace繪製單連桿機構並轉出stl檔案 solvespace單連桿機構 4. 回家練習 回家練習 40423248 2017CD 第四週 from 40423248 on Vimeo .","tags":"Course","url":"./2017spring-cd-W4.html","title":"2017/03/15 第四週"},{"text":"以下為bg7小組組長總合出的bg7_W3內容: mde2a1 ; 用Oshape的四連桿,轉入v-rep開啟 ; 編輯Hyperworks的兩個影片 ; 影片區 mde2a1: 點進wiki裡面的list,再點進2017springcd,就能看到每一週要做的事 用Oshape的四連桿,轉入v-rep開啟: 在Oshape繪製30,50,60的連趕 30的連趕 50的連趕 60的連趕 組裝完成 編輯Hyperworks的兩個影片: 由40423245跟40423248負責編輯 Hyperworks的全部影片 Hyperworks1 Hyperworks2 Hyperworks3 Hyperworks4 Hyperworks 14-1 Hyperworks 14-2 Hyperworks 14-3 Hyperworks 14-4 Hyperworks 14-5 Hyperworks 14-6 14-4 hyperworks 14 4英文字幕 from 40423222 on Vimeo . hyperworks 14 4中文字幕 from 40423222 on Vimeo . hyperworks 14 4中文字幕 from 40423222 on Vimeo . 14-5 hyperworks 14 5英文字幕 from 40423222 on Vimeo . hyperworks 14 5中文字幕 from 40423222 on Vimeo . hyperworks 14 5中英字幕 from 40423222 on Vimeo . 影片區: 40423228 任務三 Onshape 完成與第二點相同尺寸之四連桿機構 from 40423228 on Vimeo . 任務四、五 四連桿軌跡圖 from 40423228 on Vimeo . 40423228機械設計工程系-協同產品設計實習課程-W1 from 40423228 on vimeo . 40423245 任務二影片 40423245機械設計工程系 - 協同產品設計實習課程-W3任務二完成 Solvespace 30-50-60 cm 比例的四連桿組立 from 40423245 on Vimeo . 任務三影片 40423245機械設計工程系 - 協同產品設計實習課程-W3任務三利用 Onshape 完成四連桿機構, 以 stl 轉出後, 再轉入 V-rep from 40423245 on Vimeo . 任務四、五影片 40423245機械設計工程系 - 協同產品設計實習課程-W3任務四、任務五 from 40423245 on Vimeo . 40423248 2017CD 第三週 from 40423248 on Vimeo .","tags":"Course","url":"./2017spring-cd-W3.html","title":"2017/03/08 第三週"},{"text":"以下為bg7小組組長總合出的bg7_W2內容: 用python程式找出缺課同學 ; 用solvespace繪製並組立四連桿,再轉檔用v-rep開啟 ; 影片區 用python程式找出缺課同學: 可至 班級倉儲內的data下載W2資料夾 裡的cd_w2.py(有填寫座位表的人)和w2b_registered.txt(有修課的人)，接著利用利用程式碼列印出分組名單、座位列表、缺席學生和學生總數 座位程式碼 import os 讀取w2b_cadlab.txt的檔案將其儲存為adata，並設定encoding為utf-8 adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() 讀取w2b_registered.txt的檔案將其儲存為rdata，並一行一行隔開，並設定encoding為utf-8 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() 列印出adata，以便檢查結果 print(adata) 利用splitlines將adata一行一行隔開並其儲存為alist alist = adata.splitlines() 列印出alist[2]，以便檢查結果 print(alist[2]) 將變數n儲存為0 n = 0 將列從0開始算起 row = 0 將final_list儲存為一個空的數列 final_list = [] 將w2_list儲存為一個空的數列 w2_list = [] 執行一個for迴圈從第二列開始 for stud_num in alist[2:]: #每執行完一次迴圈列數+1 row = row + 1 #執行完迴圈後用\\將其隔開並儲存為blist blist = stud_num.split(\"\\t\") #列印出blist，以便檢查結果 #print(blist) #將行從0開始算起 column = 0 #執行一個for迴圈去取得blist裡的數列 for i in range(len(blist)): #每執行完一次迴圈行數+1 column = column + 1 #假如blist數列裡不是空白 if blist[i] != \"\": #列印出blist[i]，以便檢查結果 #print(blist[i]) #將組序有用_隔開的儲存為clist clist = blist[i].split(\" \") #將組序+ +學號+ +列+行的資料儲 stud_data = clist[0]+\" \"+clist[1]+\" \"+str(row)+\" \"+str(column) #將stud_data結果附加在final_list的資料裡 final_list.append(stud_data) #將clist[1]結果附加在w2_list的資料裡 w2_list.append(clist[1]) #每執行完一次迴圈n+1 n = n +1 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) 列印出分組名單 print(\"分組名單:\") 執行一個for迴圈去取得group_list裡的數列 for i in range(len(group_list)): #列印出 group_list[i]的資料 print(group_list[i]) 列印出座位列表 print(\"座位列表:\") 執行一個for迴圈去取得final_list裡的數列 for i in range(len(final_list)):存為stud_data #列印出 final_list[i]的資料 print(final_list[i]) 執行一個for迴圈去取得rdata裡的數列 for i in range(len(rdata)): #假如有在rdata裡但沒有在w2_list裡，目的在找出缺席學生 if rdata[i] not in w2_list: #列印出 rdata[i]的資料，缺席學生 print(\"缺席學生:\", rdata[i]) 列印出學生總數n個 print(\"學生總數:\", n) print(os.environ) 用solvespace繪製並組立四連桿,再轉檔用v-rep開啟: 先在solvespace裡繪製出四連桿結構 再將桿子組立起來(利用點與點的重合、線的共線及點與面的重合，限制桿子的作動。) 最後將四連桿儲存成stl檔`並用Vrep裡的import裡的Mash開啟(開啟時四連桿會重疊到地面，可用object/item shift調整Z軸高度) 影片區: Solvespace 30-50-60 cm 比例的四連桿組立 from 40423228 on Vimeo . 40423245機械設計工程系 - 協同產品設計實習課程-W2 from 40423245 on Vimeo . 2017CD 第二週 from 40423248 on Vimeo .","tags":"Course","url":"./2017spring-cd-W2.html","title":"2017/03/01 第二週"},{"text":"以下為bg7小組組長總合出的bg7_W1內容: 學期的課程大綱 ; 了解如何使用stunnel ; 利用python程式碼控制Vrep ; 影片區 學期的課程大綱: 可至 2017 Spring協同產品設計實習 觀看 了解如何使用stunnel: 在按下start之後,會出現錯誤的圖案,這是因為stunnel資料夾裡的config/styunnel.conf裡的ip與電腦的ip不同 可至cmd打ipconfig/all的指令,找到電腦的ip位置並將其複製、利用Scite編輯貼到styunnel.conf裡 利用python程式碼控制Vrep: 可至 課程倉儲 的data裡下載fourbar_eightbar_solvespace_vrep.7z以及onelink_vrep_remoteapi_pos_vel.7z兩個檔案，解壓縮後會有三個檔案，分別是單連桿、四連桿及八連桿，可試著在solvespace及Vrep裡開啟。 在Vrep裡開啟one_link_robot_remoteAPI.ttt的檔案(ttt是Vrep檔案的副檔名)，在SciTE裡開啟one_link_robot_remoteAPI_joint_target_vel.py的檔案，按下Tool裡的Go即可開始控制單連桿，按Enter會旋轉，按P會暫停 影片區: stunnel設定 from 40423228 on Vimeo . 40423245機械設計工程系-協同產品設計實習課程-W1 from 40423245 on Vimeo . 2017CD 第一週 from 40423248 on Vimeo .","tags":"Course","url":"./2017spring-cd-W1.html","title":"2017/02/22 第一週"}]};