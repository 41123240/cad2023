var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': '課程進度', 'text': '', 'tags': '', 'url': '課程進度.html'}, {'title': 'W4~W5', 'text': '', 'tags': '', 'url': 'W4~W5.html'}, {'title': 'ptc', 'text': '\n \n PTC \xa0 公司目前擁有 Creo 與 \xa0 Onshape \xa0 等兩套常見的電腦輔助機械設計套件. Creo 前身為著名的參數設計繪圖鼻祖 Pro/Engineer, 而 \xa0 Onshape \xa0 則由原創 SOLIDWORKS 的開發者所建立的全雲端電腦輔助機械設計服務. \n Creo for students: \xa0 https://www.ptc.com/en/products/education/free-software/creo-college-download \n 學生版安裝授權, 統一透過 product code: BK100908EDSTUDENTEDUNI 取得, 但必須在 IPv4 連網時才能取得授權檔案:\xa0BK100908EDSTUDENTEDUNI_license.dat, 授權使用期限為一年. \n \n 已經建立帳號者: \xa0 登入 PTC education 網站 \n https://apps.ptc.com/schools/references/install_creo10_schools_standard.pdf \xa0 \n 使用管理者開啟 parametric.psf 加入:\xa0ENV=PRO_LANG=english, 表示要使用英文介面. 使用 Chinese Simplified 代號為 chs, 使用 Chinese Traditional 代號為 cht. \n 安裝 Creo 位置:\xa0C:\\Program Files\\PTC\\Creo 10.0.0.0\\Parametric\\bin \n 免費使用的教育版授權檔案為:\xa0BK100908EDSTUDENTEDUNI_license.dat \n 以下為安裝 Creo 10 的過程與說明 ( wink_html.txt ): \n \n Onshape for education: \xa0 https://www.onshape.com/en/education/ \n autodesk << \xa0 Previous \xa0 Next \xa0 >> w6-w7 \n \n \n Copyright ©2023 All rights reserved | This template is made with \xa0 \xa0 by \xa0 Colorlib \n \n \n \n', 'tags': '', 'url': 'ptc.html'}, {'title': 'autodesk', 'text': 'AutoDesk 公司旗下的電腦輔助機械設計套件都提供 免付費教育版 . 其中 Inventor 可 直接從學校網站下載 , 且 教育版的 A360 \xa0 可在雲端或近端啟動, 但近端必須安裝對應套件. \n', 'tags': '', 'url': 'autodesk.html'}, {'title': 'siemens', 'text': '西門子 (Siemens) 是德國有名的機電資軟硬體整合公司, 目前旗下的電腦輔助機械設計套件包括中階套件 \xa0 Solid Edge ( community 版 Siemens Solid Edge \xa0-\xa0 可攜版下載 \xa0(無須上網即可開啟, 但因為啟動之前必須執行 Solid Edge 所需之 Registry import, 因此可攜版比較建議在有還原卡或虛擬主機中使用, for @nfu users only), 與高階套件 NX. \n 下載 \xa0 NX2027.3401_lite_cad2022.7z \xa0 (需要下載密碼, 執行時必須連網至機械設計工程系的認證伺服器才能開啟 \n', 'tags': '', 'url': 'siemens.html'}, {'title': 'solidworks', 'text': 'SOLIDWORKS \xa0 是目前全球機械業界使用最普遍的設計與繪圖套件 (估計全球有超過 300 萬名工程師用戶). 有關 CAD 的發展歷史, 請參考 這個影片 . 有關 SOLIDWORKS 的起源以及相關歷史資料, 請參考 影片一 、 影片二 、 影片三 、 影片四 與 影片五 的介紹. \n 其他與 SOLIDWORKS 有關的參考資料: \n SOLIDWORKS 是由 \xa0 Jon Hirschtick \xa0 在1993 年創立的。他運用作為 \xa0 MIT Blackjack Team \xa0 ( 決勝 21 點電影 ) 成員之一所賺到的 100 萬美元創辦該公司。SOLIDWORKS 首次於1995 年與 Windows 95 同時發布. \xa0 (source ) \n interviews of Jon Hirschtick,\xa0 1 ,\xa0 2 ,\xa0 3 ,\xa0 4 ,\xa0 5 \n 當年\xa0 SolidWorks 97 demo 影片 \n 使用 SOLIDWORKS 執行電腦輔助設計零組件繪圖, 在電腦輔助設計室中可以使用 SOLIDWORKS 2023, 或在自己的電腦或筆電中安裝 SOLIDWORKS 2022 教育版 (2023 安裝套件尚未取得). \n 下載安裝 SOLIDWORKS 2022 : \n 下載 SolidWorks 2022 安裝檔案 \xa0 (檔案大小 16GB, for @nfu users only, 請先根據安裝序號與認證主機在校園網路中或透過 VPN (從 \xa0 ecare 登入 申請) 連網, 必須完整安裝結束後, 再進行 service pack 更新) \n 安裝 SoildWorks 2022 過程畫面 (因為必須在校園內或使用 VPN 認證才能完成安裝, 因此以下直接顯示出 Serial Number 與認證主機 IP 位址): \n 下載後解開壓縮檔案, 執行 Setup.exe 進行安裝 (以::2 主機的安裝為例): \n \n 輸入安裝序號, 以下只安裝基本模組, 並沒有勾選其餘套件: \n \n \n 在安裝過程必須先安裝與序號對應的版本內容後再進行更新, 因此以下使用內定的否, 表示先不下載更新檔案: \n \n 勾選接受 SolidWorks 條款後進行安裝: \n \n 點選馬上安裝後,\xa0 會跳出認證伺服器的視窗表單, 必須輸入正確的認證埠號與 IPv4 位址才可進行安裝, 截至 2023.04.07, 校內的 SolidWorks 認證主機僅支援 IPv4 網路協定認證, 若希望取得認證的電腦僅啟動 IPv6 網路協定, 將無法取得認證授權. \n \n 接著按下確定後, 就可以進行漫長且容量達 20 GB 的 SolidWorks 安裝: \n \n 安裝完成之前, 會跳出下列視窗, 可以選擇不參加客戶經驗改進計畫, 或許能讓操作過程更加順暢: \n \n 最後按下完成鍵就可以執行 SolidWorks 2022 了. \n 啟動時顯示共有 500 個用戶可以同時連線: \n \n 啟動時必須允許 SolidWorks 通過公用網路防火牆: \n \n 而且必須接受 SolidWorks 的使用授權: \n \n 然後還要進行各模組的資料更新, 以下選擇更新所有模組: \n \n 更新完成後, 在開始選單中執行 SOLIDWORKS 2022, 然後同意使用授權: \n \n 終於可以使用這個佔用 20GB 硬碟資料的 SolidWorks 了: \n \n', 'tags': '', 'url': 'solidworks.html'}, {'title': 'W6~W7', 'text': '', 'tags': '', 'url': 'W6~W7.html'}, {'title': 'Win11', 'text': '目前擬將近端的靜態網站呈現改為 http, 而非 https 暫時避開下列問題. \n \n 為了讓 cd2023 內容管理系統在近端 Python 3.12.0 環境啟動時, 能夠順利透過 start_static 模擬靜態系統, 目前的 start_static 原始碼改為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n \n \n \n @app .route( \'/start_static/\' ) \n def   start_static(): \n \xa0 \n \xa0\xa0\xa0\xa0 """Start local static server \n \xa0\xa0\xa0\xa0 """ \n \xa0 \n \xa0\xa0\xa0\xa0 if   isAdmin(): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 server_address  =   get_wan_address()  or   \'localhost\' \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 server_port  =   static_port \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # Determine address family based on server_address \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 address_family  =   socket.AF_INET  if   \':\'   not   in   server_address  else   socket.AF_INET6 \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd  =   http.server.HTTPServer((server_address, server_port), http.server.SimpleHTTPRequestHandler, bind_and_activate = False ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd.socket  =   socket.socket(address_family, socket.SOCK_STREAM) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR,  1 ) \n \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   address_family  = =   socket.AF_INET6: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY,  0 ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd.socket.bind((server_address, server_port,  0 ,  0 )) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 else : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd.socket.bind((server_address, server_port)) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # for Python 3.12.0 need to use ssl create context first \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # https://docs.python.org/3/library/ssl.html#ssl-security \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 context  =   ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 context.load_cert_chain(certfile = \'./localhost.crt\' , keyfile = \'./localhost.key\' ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd.socket  =   context.wrap_socket(httpd.socket, server_side = True ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd.server_activate() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 httpd.serve_forever() \n \xa0\xa0\xa0\xa0 else : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   redirect( "/login" ) \n \n \n \n \n \n \n \n 其中當 start_static 執行時, 經由 openssl 指令: \n Y:\\portablegit\\usr\\bin\\openssl s_client -connect [Windows 11\'s IPv6 address]:8445 -tls1_3 \n 檢查, 發現目前採用\xa0context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER) 設定中的\xa0 ssl.PROTOCOL_TLS_SERVER, 採用的認證版本可為 tls 1.2 與 1.3 版, 但是 如同 這裡的敘述 , 伺服器發出的 tls 1.3 版可以被 Windows 10 操作系統接受, 但卻無法在 Windows 11 操作系統中正確連結採用上述程式碼的靜態網頁伺服器. \n 另外, 透過 Windows 11 搜尋輸入\xa0inetcpl.cpl 可以發現 tls 1.3 已經啟用. 因此目前無法得知為何 start_static 啟動後, 無法在 Windows 11 連線到虛擬的系統靜態網站. \n', 'tags': '', 'url': 'Win11.html'}, {'title': 'W8', 'text': '針對 Coppeliasim 4.6.0 版的推出: \n CoppeliaSim 於 2023.10.21 推出 \xa0 4.6.0 版 . (因為更改不多, 目前可以沿用 4.5.1 rev4, 但仍必須關注 CoppeliaSim 逐步強化 Python scripting 的趨勢( 1 , \xa0 2 ), 其目的在於能夠更便於在機電整合場景系統中, 導入更多的 AI 相關 Training) \n plugin \xa0 架構更新, 可加載或卸載 plugin \n sim.setThreadAutomaticSwitch is deprecated in favor of \xa0 sim.setStepping \n sim.switchThread is deprecated in favor of \xa0 sim.step \n Command-line \xa0 option -H now loads the headless version of the CoppeliaSim library. \n CoppeliaSim 使用者手冊: \xa0 https://mde.tw/pjcopsim \n zmq Remote API: \xa0 https://www.coppeliarobotics.com/helpFiles/en/zmqRemoteApiOverview.htm \n https://github.com/CoppeliaRobotics/zmqRemoteApi \n CoppeliaSim 4.5.1 for IPv6: \n 下載 \xa0 CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z \xa0 (需要下載密碼) \n 下載 \xa0 zmqRemoteAPI Python for cad2023.7z \xa0 (需要下載密碼) \n \n 有關 s1511.cycu.org 主機的使用, 也可以參考 \xa0 https://mde.tw/cpnote \xa0 中各章節頁面內容. \n 維護網站的三個方式: \n \n localhost 透過 token, SSH 確定 git push 權限, SSH 設定可透過 Putty 完成 \n Replit 透過 connect 功能連結與 Github 的權限 \n 自架主機 s1511.cycu.org, 透過 SSH 與分配埠號 \n \n \n 以下將說明第 3 種方法, 使用 s1511.cycu.org 管理個人與分組網站: \n 其中包括 1) \xa0 如何遠端登入 、2 ) \xa0 如何取放檔案 、3) \xa0 如何與 github 帳號彼此信任 、4) \xa0 如何取下 cad2023 、5) \xa0 如何啟動或關閉 cad2023 倉儲 、6) \xa0 如何連結到動態網站 、7) \xa0 如何設定靜態網站 、8) \xa0 如何連動動態網站改版與靜態網頁 、9) \xa0 如何對資料進行保全 以及 10) \xa0 網路連線協定 等相關議題. \n w8_2a_s1511 設定操作影片 part1.mp4 \n w8_2a_s1511 設定操作影片 part2.mp4 \n w8_2a_s1511 設定操作影片 part3.mp4 \xa0(只有前段有聲音) \n w8 2a s1511 設定操作影片 part4.mp4 \n 1) \xa0 如何遠端登入 : \n 遠端登入到 s1511.cycu.org (只支援 IPv6 網路協定), 命令列指令 ssh client, 工具可以使用 Putty \n 使用 ssh 指令: ssh 帳號@s1511.cycu.org 然後輸入密碼 (鍵入密碼時螢幕並不會顯示字元) \n 使用 putty.exe 設定 session 令其連接到\xa0 s1511.cycu.org \n 登出指令為 exit \n 假如在 IPv4 網路協定下, 則 ssh 指令與 putty.exe 都必須透過能支援 IPv6 的代理主機進行連線. \n 2b w8 作業: 請根據\xa0 cad2023_2b_w8.txt \xa0檔案中的內容, 透過程式的讀取與篩選, 按照時間先後, 列出 2b 修課學員中已經登入 s1511.cycu.org 的學號. (修課學員名單\xa0 2a:\xa0 0838 , 2b:\xa0 0851 ) \n 假如在近端處理, 必須同時儲存兩個檔案後, 進行資料選取: \n get_stud_num_from_last_data.py \xa0(若採 Brython 編寫, 可以直接 列出 2b w8 結果 \xa0( 2a w8 結果 ), 依照登入時間先後排序, 其中 41123227 為管理者最早測試時登入, 若採用 ANSI 編寫: \xa0 c_parse_last_cp2023.7z ) \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n \n \n \n # 讀取學號檔案 \n with  open ( "2b_user_list.txt" ,  \'r\' ) as user_file: \n \xa0\xa0\xa0\xa0 user_lines  =   user_file.read().splitlines() \n \xa0 \n # 讀取 last 指令轉出的檔案, 以 last -w > cad2023_2b_w8.txt 建立檔案 \n with  open ( "cad2023_2b_w8.txt" ,  \'r\' ) as cad_file: \n \xa0\xa0\xa0\xa0 # 以下是利用跳行符號, 將每一行區隔成數列 \n \xa0\xa0\xa0\xa0 cad_lines  =   cad_file.read().splitlines() \n #print(cad_lines) \n \xa0 \n # 從 cad_lines 建立所有登入使用者數列 \n login_users  =   [] \n for   i  in   cad_lines: \n \xa0\xa0\xa0\xa0 line_list  =   i.split( " " ) \n \xa0\xa0\xa0\xa0 login_users.append(line_list[ 0 ]) \n #print(login_users) \n \xa0 \n # 根據 https://stackoverflow.com/questions/480214/how-do-i-remove-duplicates-from-a-list-while-preserving-order \n # 數列去除重複元素但仍保持原始次序 \n login_users  =   list ( dict .fromkeys(login_users)) \n #print(login_users) \n \xa0 \n # 建立數列存放符合條件的使用者 \n valid_users  =   [] \n \xa0 \n # 取出符合條件的使用者 \n for   line  in   login_users: \n \xa0\xa0\xa0\xa0 if   "cad"   in   line: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # 將 cad 字串去除 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 user_number  =   line.replace( "cad" , "") \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   user_number  in   user_lines: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 valid_users.append(user_number) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n # 利用 reverse() 將 valid_users 反向排序 \n valid_users.reverse() \n \xa0 \n # , 最早登入者列在最前面 \n for   user  in   valid_users: \n \xa0\xa0\xa0\xa0 print (user) \n \n \n \n \n \n \n \n 2) \xa0 如何取放檔案 : \n 利用 sftp 從 s1511.cycu.org 取下檔案畫面: \n \n 進入對應的目錄之後, 以 pwd 確認所在目錄後, 以 get 取下檔案, 以 put 放上檔案, 例如: 進入 images 目錄後, 可以透過 get gd_ex1.png 取下圖檔, 若要將圖檔放入 images 目錄, 則只要確定 sftp 進入後, cd 到 images 目錄, 然後以 put gd_ex1.png 將圖檔送入. \n 3) \xa0 如何與 github 帳號彼此信任 : \n 利用 ssh-keygen 在 .ssh 目錄建立 id_rsa 與 id_rsa.pub, 之後將 id_rsa.pub 登記到各自帳號下 settings 的 SSH and GPG keys 區域. \n .ssh 目錄中的\xa0 config , 將 SSH session 名稱設為 github.com: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n Host github.com \n User git \n Hostname github.com \n ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n \n \n \n \n \n 將 上列 config 送到帳號下的 .ssh 目錄之後, 就可以利用 github.com 作為 session, 從 github.com 取下 cad2023 倉儲, 並且已經具備 git push 的權限. \n 4) \xa0 如何取下 cad2023 : \n 以 SSH 協定取下 cad2023 的指令: \n git clone --recurse-submodules \xa0 git@github.com :帳號/cad2023.git \n 接下來必須從 cad2023 取下 server.py 進行編輯, 放入自己分配到的 9xxx 埠後, 再送回. \n 5) \xa0 如何啟動或關閉 cad2023 倉儲 : \n 當使用者已經將上述 public key 登錄到 Github 帳號下, 且已經將 server.py 中的 9xxx 改為自己所分配到的內部埠號後再送回, 則可以利用 python3 server.py 啟動編輯網站, 並測試是否可以連線到 \xa0 https://s1511.cycu.org:8xxxx \n 由於管理者內建密碼為 admin, 使用者修改後, 編碼字串將存入 config/config, 此檔案必須設為只有管理者可以 read, 若目前位於登入後的工作目錄, 則其指令為: \n chmod og-rwx config/config \n 表示要將 others 與 group 針對 config/config 檔案的 read, write 與 execute 權限取消. \n 若希望使用者登入後動態網站仍然執行, python3 server.py& \n 當 server.py 已經啟動, 使用者登入後可以利用以下指令, 列出各使用者啟動網頁編輯所對應的 PID (Process ID): \n ps -axo pid,comm,uname | grep "python3" \n 各用戶若希望刪除已經啟動的 Process, 可以找到所啟動的 PID 後, 以下列指令關閉服務 (若 PID = 1234): \n kill 1234 \n 其中, 系統管理者可以刪除所有 Processes, 而各用戶只能刪除各自所啟動的 Process. \n 6) \xa0 如何連結到動態網站 : \n python3 server.py 啟動測試是否可以連線到 \xa0 https://s1511.cycu.org:8xxxx \n 編輯網站啟動之後, 使用者登入後可以透過 config 指令修改管理者密碼, 而此一密碼的編碼將存入 s1511 主機倉儲檔案中的 config/config 檔案中, 且此一檔案將只會位於 s1511, 而不會被推向 github.com (因為 .gitignore 的設定). \n 當使用者決定要進行 git add 與 git commit 之前, 必須先以 git config 設定 user.name 與 user.email, 此設定將會存入 .gitconfig 檔案中. \n 7) \xa0 如何設定靜態網站 : \n 前面已經在 /home/帳號/倉儲目錄 透過 SSH 協定從 github.com 取下檔案內容, 由於 SSH keys 的設定, 此一倉儲一旦改版, 可以在新增提交之後, 可以透過 git push 指令將改版資料推向 github.com. \n 當倉儲的靜態網站 git push 至 github.com 後, 將會透過 Github Pages 的設定進行轉檔. \n 若使用者希望在 s1511 主機中伺服對應的倉儲靜態網站, 則可以將倉儲檔案放入帳號中的 public_html 目錄中. \n 由於位於 public_html 僅需鏡射位於 github.com 中的倉儲檔案資料, 並不作為 git commit 與 git push 之用, 因此可以利用 git clone --recurse-submodules https://github.com/帳號/倉儲名稱.git 取下 (也就直接以 https 協定取下倉儲內容), 並可在 https://s1511.cycu.org/~帳號/倉儲名稱 中擷取靜態網站資料. \n 8) \xa0 如何連動動態網站改版與靜態網頁: \n 當每次 /home/帳號/倉儲 中的檔案改版, 而且資料已經推送到 github.com, 使用者就可以進入 public_html 中的對應倉儲目錄, 以 git pull 指令從 github.com 取得最新的版本資料, 此指令可以採手動, 也可以設法納入倉儲的 acp 指令中: \n acp 必須納入 public_html 目錄中的靜態網站 git pull, 且利用 chmod u+x acp 令其可以執行. \n acp \xa0 內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n \n \n \n #! /bin/bash \n git add . \n git commit -m  "$1" \n git push \n cd ./../public_html/cad2023 \n git pull \n \n \n \n \n \n \n \n 9) \xa0 如何對資料進行保全: \n chmod u+x acp \n chmod og-rwx config/config \n chmod 711 /home/cad學號 \n chmoe 755 /home/cad學號/public_html \n 假如自己所分派到的網路 port 遭到占用, 可以利用下列指令查出使用該埠號的使用者帳號: \n 例如要查詢埠號 9210 埠號的使用情形, 指令為\xa0 lsof -i :9210, 其中 ls 為 list, of 為 open file, -i 中的 i 為 internet, :9210 表示要求列出與 port 9210 有關 internet 使用相關的資料. \n 10) \xa0 網路連線協定: \n 將 cad2023 倉儲資料取到 s1511.cycu.org 帳號下, 若使用 SSH 協定且位於只有 IPv6 網路協定, 則分別牽涉以 SSH 及 https 協定連線到 github.com 的設定. \n 其中所謂運用 SSH 協定與 github.com 連線, 運用在 git clone --recurse-submodules \xa0 git@github.com:帳號/cad2023.git \xa0 因為其流程是利用 SSH 協定以 git 作為帳號登入到 session 名稱為 github.com 的連線主機 (即 config 中的 Hostname 設定), 能不能遠端登入則取決於 github.com session (即 config 設定檔案中的 Host 名稱) 後面的帳號是否已經登錄與目前 .ssh/id_rsa 所對應的 public key. \n 至於在純 IPv6 網路下的 s1511.cycu.org 其 https 所需的 proxy 設定, 已經由管理者設定於 /etc/environment 中, 因此所有使用者都無需設定. \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9~W11', 'text': 'w10 網路狀態: 目前似乎從學校電腦無法使用 hinet 的 IPv6 DNS 伺服器. 驗證方式: 在命令列中輸入 nslookup, 然後以 server 2001:b000:168::1 指令將 DNS 設為中華電信的符號名稱伺服器, 然後查詢 google.com. \n 因應方法: 使用機械設計系所建立的 DNS 伺服器, 140.130.17.3 以及 \xa0 2001:288:6004:17::3 \n 無法使用中華電信 DNS 原因: 應該是學校網管修改設定, 禁止跨區設定 DNS 伺服器. \n w10 Ubuntu 問題: 22.04 版更為最新後, netplan 在無 openvswitch 啟動的情況下無法更新設定. \n 先處理 /etc/netplan/net.yaml 中 DNS 伺服器改為系上主機, 在無法使用 sudo netplan apply 更新 /etc/netplan/net.yaml 設定之前, 可以查詢 /etc/environment 中是否使用 IPv6 address 進行設定 http_proxy 與 https_proxy 變數. 或者修改 /etc/resolv.conf 中的 nameserver 設定, 讓 net.yaml 中的 DNS 設定可以運作. 且利用 \xa0 sudo apt install openvswitch-switch \xa0 安裝並執行 netplan 所需的服務 (其實是 bug, 但為了能讓 netplan 正常運作的權宜之策). \n 有關電腦輔助設計室網路設定: \n w10_2b_cadlab_network_setting.7z \xa0 (需要下載密碼) - 電腦輔助設計室網路設定批次與 Powershell 檔案. \n tinyc.7z \xa0 (需要下載密碼) - 使用 Tiny C Compiler 編譯 C 程式, 包含 gd 與 gnuplot. \n python3114_git_putty.7z \xa0 (需要下載密碼) - 將近端 cmsimde 啟動並改版後推向 Github 所需的檔案. \n \n creo 10 安裝流程的 wink 專案檔案下載 \xa0 (需要密碼) \n 有關線上簡報、網誌與多媒體影片製作工具, 請參考: \xa0 https://mde.tw/cpnote/content/w10.html \n 有關學習計算機程式與電腦輔助設計相關課程的心態與方法, 請參考 這裡 的說明. \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n 有關口頭報告 (oral presentation): \n PowerPoint vs reveal.js: Choosing Presentation Tools (softwarekeep.com) \xa0 \n https://ithelp.ithome.com.tw/articles/10185467 \xa0 \n cad2023 倉儲中的 reveal.js:\xa0 https://mde.tw/cadnote/reveal/ \xa0 \n 有關永動機運動模擬玩具 (perpetual motion simulator toy): \n CAD 零組件繪圖 \n 原型製作前的系統模擬與製程規劃 \n 如何學習 CoppeliaSim: \n 透過閱讀\xa0 https://mde.tw/pjcopsim \xa0中的 tutorial 與相關指令說明後, 實際操作測試並在個人網頁中記錄各項功能的使用方法. \n 進入 CoppeliaSim \xa0 Forum , 搜尋相關討論或發問. \n Arduino code to CoppeliaSim \xa0 展示. ( Horosim , \xa0 備份 ), 更早的 討論 . 虛實整合: \xa0 1 , \xa0 2 , \xa0 3 . \n 有關鋼球平衡台 (steel ball balancing platform): \n 有關虛實整合彈珠台 (cyber-physical pinball table): \n', 'tags': '', 'url': 'W9~W11.html'}, {'title': 'W12', 'text': '2b_w12_seat.txt \n 2a_w12_seat.txt \n w12_2b_1.mp4 \xa0(利用 簡報 說明最新的網路設定流程, 以及 w12 的課堂測驗內容) \n 校方的 DHCP6 並沒有正確設定系上的 IPv6 Gateway, 也沒有 DNS 伺服器設定, 使用者必須自行根據 所分配的固定 IPv6 位址 進行設定, 另外校方的 IPv6 DNS 伺服器也無法正常運作, 必須使用系上的 DNS server 設定. \n Windows 網路查詢指令: ipconfig /all \n DNS 伺服器查詢指令: nslookup \n 查詢至特定主機的路徑指令: tracert \n 其他 Windows 常用的網路指令 \n w12_2b_2.mp4 \xa0 ( 利用 簡報 說明如何將座次表放到倉儲 downloads 目錄, 且將連結放入 w12 頁面) \n 利用人工或電腦輔助方法建立 w12 頁面中的班上學員座次表? \n \n w12_2a_1.mp4 \xa0 (ssh-keygen 在 .ssh 建立 id_rsa 與 id_rsa.pub, 以 sftp 放入 config, 並利用 puttygent 將 id_rsa 轉為 .ppk 以便設立 session 用) \n w12_2a_2.mp4 \xa0 (如何利用 ChatGPT 協助解決座位排序與列印問題) \n w12_2a_3.mp4 \xa0 (有關 Solvespace 基本繪圖與轉檔, 最後說明如何利用 IPv6 相容的 Python 與 CoppeliaSim 進行互動) \n 使用 ChatGPT 協助處理 上述 問題一 : \n 輸入1: (在雙引號之後, 直接將檔案內容複製貼上, 作為輸入內容) \n 請利用 Python 讀取下列檔案名稱為 2b_w12_seat.txt "2b stud num\xa0\xa0 \xa0seat 41123201\xa0\xa0 \xa0 41123202\xa0\xa0 \xa0(3,8) 41123203\xa0\xa0 \xa0(3,7) 41123204\xa0\xa0 \xa0(6,8) ~~~ 中間資料沒有列出來 41136124\xa0\xa0 \xa0(3,2) 41136126\xa0\xa0 \xa0 41136131\xa0\xa0 \xa0" \n ChatGPT 回覆1: \n 要讀取這個檔案，你可以使用 Python 的檔案處理功能。以下是一個基本的範例程式碼，可以協助你達成這個目標： \n w12_chatgpt_prob1_ans1.py \n 這個程式碼會將學號和座位號的對應關係存儲在一個字典中，然後顯示出來。請注意，這裡使用 strip() 方法來去除空格和換行符號。 請確保你的檔案路徑正確，並注意檔案的編碼，以確保正確讀取中文內容。 \n 討論1: 經執行 ChatGPT 回覆的程式, 已經可以讀取資料, 並且列出資料. 但資料沒有排序. \n 輸入2: \n 假如前面程式中的座位號第一個 index 代表"列"而第二個 index 代表行, 請延續上個程式, 由左到右作為每一列的順序, 而且希望陣列排序是列出該位置上的學員學號 \n ChatGPT 回覆2: \n 了解，如果要按照座位號的列和行來排序並列出每個位置上的學號，我們可以修改程式碼來實現。以下是修改後的程式碼： \n w12_chatgpt_prob1_ans2.py \n 這裡我們使用了 sorted 函數，並通過 key 參數指定排序規則，即按照列和行的順序進行排序。最後，我們顯示排序後的結果，列出每個位置上的學號。 \n 討論2: 經執行 ChatGPT 回覆的程式, 所讀取的資料已經排序. \n \n 輸入3: \n 假如 "2b_w12_seat.txt" 可以從 "https://mde.tw/cadnote/downloads/2b_w12_seat.txt" 這個網址讀取, 而且希望將上一個 Python 程式改用 Brython 編寫, 要如何修改? \n ChatGPT 回覆3: \n Brython 是一個允許在瀏覽器中運行 Python 3 代碼的工具，而在瀏覽器中讀取外部檔案通常會涉及到跨網域 (Cross-Origin) 的問題。為了避免這些問題，我們可以使用 JavaScript 來在瀏覽器中讀取檔案，然後將檔案內容傳遞給 Brython。以下是修改後的 Brython 程式碼： \n (因為我們不使用 ChatGPT 混用 Javascript 與 Brython 的建立, 所以此地 不列出其回覆的原始碼 ) \n 這個 HTML 文件引入了 Brython，然後使用 JavaScript 的 XMLHttpRequest 將檔案內容從指定的 URL 讀取並傳遞給 Brython 的 eval 函數。在 eval 函數中執行 Python 代碼。這樣就可以在瀏覽器中運行 Python 代碼，同時解決了跨網域的問題。請注意，這裡假設檔案是文本格式，如果是二進制檔案，需要進一步處理。 \n 討論3: ChatGPT 建議的程式或許也能達成目的, 但是混用 Javascript 與 Brython 並不是目前所需, 因此不採用. \n \n 輸入4: \n 假如我們已經知道 Brython 可以利用 open(https://mde.tw/cadnote/downloads/2b_w12_seat.txt).read() 或 open(https://mde.tw/cadnote/downloads/2b_w12_seat.txt).readlines() 讀取到檔案, 可以將上一個程式全部改用 Brython 完成嗎? \n ChatGPT 回覆4: \n 是的，如果你已經知道 Brython 可以使用 open("https://mde.tw/cadnote/downloads/2b_w12_seat.txt").read() 或 open("https://mde.tw/cadnote/downloads/2b_w12_seat.txt").readlines() 讀取檔案，你可以將上述 Python 程式碼轉換為 Brython 程式碼。以下是修改後的程式碼： \n w12_chatgpt_prob1_ans3_brython.py \xa0 (這裡已經配合 cmsite 中的 Brython 環境, 可以 直接從 Gist 取出執行 ) \n 這個 HTML 文件使用 Brython 在瀏覽器中運行 Python 3 代碼。Brython 的 open 函數會模擬 Python 的 open 函數，讓你能夠在瀏覽器中讀取檔案。這樣就可以使用和在 Python 中一樣的方式處理檔案，同時在瀏覽器中運行。 \n 討論4: ChatGPT 因為帶有非常大量的邏輯變數, 因此詢問時若能給予明確指示, 將可能取得更有用的回答. \n 接下來就可以延續上述回覆所得到的程式碼, 加以研究後再修改為其他格式的資料輸出, 例如: \xa0 直接在 Brython 執行 後, 列出所需要的 html 物件 . \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13-W14', 'text': '利用 ChatGPT 對話所完成的 2a 座位排序程式: \xa0 w13_2a_seat.py 執行結果 \n 利用 " sudo update-rc.d stunnel4 defaults " 將 s.cycu.org 中的 stunnel4 設為與系統同步啟動. \n w13_2b_1.mp4 \xa0 (說明如何利用 ChatGPT 協助利用 Python 程式列出各組學員座位表) \n 接下來請根據下列步驟測試如何在 CoppeliaSim 場景中利用感測器偵測, 並對特定物件施力: \n 第一步: \n 下載支援 IPv6 網路協定版本 \xa0 CoppeliaSimEdu_4.5.1_rev4_for_cd2023.7z \xa0 (需要下載密碼) \n CoppeliaSim 使用者手冊 , \xa0 CoppeliaSim 4.3.0 使用手冊網站 \n 第二步: \n 與 ChatGPT 對話時, 可以利用\xa0 zmqRemoteAPI Python for cad2023.7z \xa0(需要下載密碼)\xa0中的 ZMQ Remote API Python 程式作為 Template, 探討如何設置感測器, 在正確時間對剛球施力. \n 第三步: \n 實際操作 CoppeliaSim 鋼球永動模擬器電腦輔助設計三個階段: 建立模型零組件 - 轉入機電模擬系統 - 根據實際物理條件設置機電系統.\xa0 perpetual_motion_simulator_project_cad2023.7z 下載 \xa0(需要密碼) \n 請各組學員將上列三個步驟的執行, 以 Wink 操作影片放入個人與分組網站中的 w13 頁面. \n w13_2b_2.mp4 \xa0 (有關上列操作步驟的說明) \n triangle_solvespace_coppeliasim_ex1.7z \xa0 (利用 Solvespace 建立 V 形軌道, 希望建立較簡單的鋼球永動模擬系統) \n w14 \n w14_2b_1.mp4 \xa0 (說明如何簡化專案一, 讓鋼球直接在兩個三角形斜面上進行永動模擬) \n w14_2b_2.mp4 \xa0 (延伸三角形斜面對鋼球施力的模式, 套用到 2d 的永動模擬器) \n w14_2a_1.mp4 \xa0 (延伸三角形斜面對鋼球施力的模式, 套用到 2d 的永動模擬器) \n w14_2b_2.mp4 \xa0 (說明如何執行\xa0 project1_w14_simple.7z \xa0(電磁力吸引) 的控制程式) \n 專案一 Perpetual Motion Simulator 永動模擬器: \n cad2023_w14.7z \xa0 (需要透過控制系統設計找出能讓鋼球通過感測器時的最佳施力大小) \n project1_w14_simple.7z \xa0 (電磁力吸引) \n cad2023_w14_perpetual_motion_simulator_template.py \n \n 設置感測器與 ZMQ remote API python 施力程式後: \xa0 triangle_perpetual_motion_simulator.7z \n \n \n 專案二: \n w14_2a_3.mp4 \xa0 (準備進入專案二) \n w14_2a_4.mp4 \xa0 (從 CAD 以 STL 將零組件轉入 CoppeliaSim 的注意事項) \n 1d_ball_balancing_get_distance.7z \xa0中的 Solvespace 組立件其座標為 Y 軸向上, 但 CoppeliaSim 場景中的絕對座標則為 Z 軸向上, 因此將 Solvespace 組立件轉入時, 必須選擇 Z 軸向上, 而且必須設法將所有零件的座標以自有的中心座標為準) \n w14_2b_3.mp4 \xa0 (說明如何利用 zmq Remote API 程式取得下列場景中鋼球與感測器間的距離) \n \n 參考資料: \n https://wikis.utexas.edu/display/RMD/Home+-+Robot+Mechanisms+Design \xa0 \n 以 API \xa0 改變重力 : \n sim.setArrayParameter(sim.arrayparam_gravity,{gx,gy,gz}). \n set initial velocity : \n sim.setObjectFloatParameter(objectHandle,X,y), where X can be sim.shapefloatparam_init_velocity_x, sim.shapefloatparam_init_velocity_y or sim.shapefloatparam_init_velocity_z, and y the initial velocity in that direction \n get object velocity : \n list linearVelocity, list angularVelocity = sim.getObjectVelocity(int objectHandle) \n Reinforcement Learning: \n https://www.coppeliarobotics.com/helpFiles/en/PyRep.htm \n https://github.com/chauby/CoppeliaSimRL \n Deep RL \xa0 ( ebook on Springer ) \n https://github.com/moliqingwa/coppeliasim_deeprl \n', 'tags': '', 'url': 'W13-W14.html'}, {'title': 'W15', 'text': '操作考試 : 請利用自選的電腦輔助設計套件建立 \xa0 https://mde.tw/cadnote/content/pms.html \xa0 中的零組件 (尺寸與操控內容請自訂), 並加入感測器與適當的設計元件或機構, 說明預計如何令其在接上外部電源後, 能夠讓系統中的鋼球在軌道上進行永動模擬. \n 完成零組件與可行系統設計後, 請將零組件轉入 CoppeliaSim 建立模擬場景, 並在分組中自選另一名組員, 經過彼此討論後, 請利用 ZMQ remote API Python 程式互相控制對方的永動模擬場景, 以便完成兩人一組的兩則永動機模擬操作 (若找不到協同對象, 請自行用所分配到的 IPv6 位址進行控制模擬). \n 完成上述兩人一組的現場操作考試後, 請利用 Wink 製作 MP4 操作影片, 說明從零組件繪圖至完成互動控制模擬後的各階段細節, 並將上述各項內容放入個人倉儲與網站 (頁面標題請用第一階設定, 名稱為 exam). \n step1: 基本零組件設計繪圖. \n step2: 施力機構設計, 納入軌道下方控制盒中. \n step3: 將軌道、鋼球與簡化後的控制盒輸入 CoppeliaSim. \n step4: 配合控制系統設計, 納入感測器與施力機構或系統. \n step5: 在 localhost 以 IPv6 ZMQ remote API Python 程式, 配合感測器作動對鋼球施力. \n step6: 跨網路對協同組員的場景進行控制模擬. \n \n 截至 2023.12.22 Replit 仍可用來維護 Github 倉儲中的對應網站內容, 且可透過下列 html 將 Repl 嵌入網頁中: \n \n \n \n \n \n \n 1 \n \n \n \n < iframe   frameborder = "0"   width = "100%"   height = "400"   src = "https://replit.com/@wcms/cadnote?embed=true" ></ iframe > \n \n \n \n \n \n \n \n \n 例如要查詢埠號 9210 埠號的使用情形, 指令為\xa0 lsof -i :9210, 其中 ls 為 list, of 為 open file, -i 中的 i 為 internet, :9210 表示要求列出與 port 9210 有關 internet 使用相關的資料. \n 利用 s.cycu.org 維護 github.com 上的倉儲與網站內容的說明在:\xa0 https://mde.tw/cadnote/content/w8.html \xa0 \n', 'tags': '', 'url': 'W15.html'}, {'title': 'coppeliasim', 'text': '原始碼: \n https://github.com/CoppeliaRobotics \xa0 \n 核心程式庫: \xa0 https://github.com/CoppeliaRobotics/CoppeliaSimLib \n 採商業與教育版授權原始碼: \n https://github.com/CoppeliaRobotics/simGeom \n https://github.com/CoppeliaRobotics/simIK \n https://github.com/CoppeliaRobotics/coppeliaGeometricRoutines \n https://github.com/CoppeliaRobotics/coppeliaKinematicsRoutines \n 範例場景: \xa0 https://github.com/CoppeliaRobotics/scenes \n 範例模型: \xa0 https://github.com/CoppeliaRobotics/models \n 使用者手冊: \n https://www.coppeliarobotics.com/helpFiles/index.html \xa0 (以 Google \xa0 翻譯為中文 ) \n https://mde.tw/pjcopsim \xa0 ( 倉儲 , \xa0 開發專案說明 ) \n ZeroMQ Remote API: \n https://www.coppeliarobotics.com/helpFiles/en/zmqRemoteApiOverview.htm \n Stepped mode: \xa0 https://www.coppeliarobotics.com/helpFiles/en/simulation.htm#stepped \n Reference: \n http://wcm.cycu.org:88/github/cd2021/content/V-rep.html \xa0 (只能在系上 IPv6 網段中連結) \n 利用 Leo Editor 解讀 CoppeliaSim 完整的 XML 檔案格式, \xa0 Leo Editor Google Group \n 因為 Python 3.12.0 環境下 Leo Editor 還無法正常透過 pip 安裝, 因此必須手動安裝 PyQt5 之後, 再使用 pip install leo, 所完成的 Python 3.12.0:\xa0 Python312_leo_664_PyQt5.7z \xa0 (需要下載密碼) \n \n 因為 CoppeliaSim 4.5.1 之後的版本, 將設定存入操作系統的\xa0 C:\\users\\%USERNAME%\\AppData\\Roaming\\Coppeliasim 目錄中, 因此若使用過程曾經修改設定, 必須將設定複製到可攜環境的對應目錄中, 之後若需延續先前的設定, 就必須在可攜系統啟動時, 先將設定從可攜系統轉存進入操作系統的對應目錄, 批次檔案指令如下 (假設可攜系統使用 home_ipv6 目錄儲存 AppData 內容): \n \n \n \n \n \n \n 1 \n \n \n \n Xcopy %Disk%:\\home_ipv6\\AppData\\Roaming\\Coppeliasim C:\\users\\%USERNAME%\\AppData\\Roaming\\Coppeliasim /E /H /C /I /Y \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'coppeliasim.html'}, {'title': 'exam', 'text': '在系上 IPv6 網段時, 可以在線上考試主機 \xa0 https://exam.cycu.org \xa0 帳號註冊時段 進行註冊 : \n \n 其中: \n username 請填入學號 \n email 請使用學號@nfu.edu.tw \n 選定密碼之前, 請將密碼存入個人手機的備忘錄 \n password 輸入兩次, 至少包含八個數字與英文字母的組合字串 \n name 請輸入中文姓名的名字 \n surname 請輸入中文姓名的姓 \n groups: \n 二甲: cad2023a \n 二乙: cad2023b \n 一甲: cp 2023a \n 一乙: cp2023b \n', 'tags': '', 'url': 'exam.html'}, {'title': '零組件繪圖', 'text': '', 'tags': '', 'url': '零組件繪圖.html'}, {'title': '磁力吸引1', 'text': '盆子 \n \n 管子 \n \n 底座 \n \n 組合圖的前視圖 \n \n 柱子 \n \n 球體 \n \n 組合圖 \n \n', 'tags': '', 'url': '磁力吸引1.html'}, {'title': 'W15test', 'text': '軌道 \n \n 底座 \n \n 組合圖', 'tags': '', 'url': 'W15test.html'}, {'title': 'w12 作業', 'text': '11/30 機械設計二乙 出席座位表 \n 2b_w12_seat.txt \n 2b stud num seat 41123201 41123202 (3,8) 41123203 (3,7) 41123204 (6,8) 41123205 (2,9) 41123206 (3,4) 41123207 (1,5) 41123208 (2,3) 41123209 (2,6) 41123210 (4,3) 41123211 (6,2) 41123212 (1,7) 41123213 (1,3) 41123214 (4,1) 41123215 (1,4) 41123216 (6,9) 41123217 (6,7) 41123218 (4,5) 41123219 41123220 (1,1) 41123221 (2,2) 41123222 (3,9) 41123223 (3,5) 41123224 (4,2) 41123226 (3,3) 41123227 (3,6) 41123228 41123229 (5,2) 41123230 (2,7) 41123231 (1,2) 41123232 (6,5) 41123233 (2,8) 41123234 41123235 (5,1) 41123236 (5,3) 41123237 (1,9) 41123238 (1,8) 41123239 (4,8) 41123240 (4,4) 41123241 (5,7) 41123243 (5,8) 41123244 41123245 (4,9) 41123246 (5,6) 41123247 (6，3) 41123248 41123249 (5,9) 41123250 (5,5) 41123251 (5,4) 41132222 (6,4) 41136103 (7,3) 41136124 (3,2) 41136126 41136131 \n', 'tags': '', 'url': 'w12 作業.html'}, {'title': '系統模擬', 'text': '', 'tags': '', 'url': '系統模擬.html'}, {'title': '磁力吸引2', 'text': '\n', 'tags': '', 'url': '磁力吸引2.html'}, {'title': '網路設定', 'text': '', 'tags': '', 'url': '網路設定.html'}, {'title': 'Replit', 'text': '如何維護網頁? \n 1.在動態網站儲存更新的資料內容 \n 2.轉為靜態網站 \n 3.回到replit點擊Git \n 4.在update輸入框中輸入剛更新的內容的代稱 \n 5.點選stage&commit(內容即在載入) \n 6.最後點擊push推上去 \n 7.到github個人倉儲看是否為綠燈 \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 's1511', 'text': '1.開啟ssh_cad學號.bat \n 2.輸入密碼(在學校email有) \n 3. 進入 cad2023 \n 4.輸入python3 server.py \n 5.成功執行，進入 https://s1511.cycu.org :分配到的外部 埠 號 \n 6.登入進去並且進行更新 \n 7.更新完轉靜態(convert)，按下acp並且輸入備註 \n 8.到github個人倉儲看是否為綠燈 \n', 'tags': '', 'url': 's1511.html'}, {'title': 'localhost', 'text': '', 'tags': '', 'url': 'localhost.html'}, {'title': '課程總結', 'text': '', 'tags': '', 'url': '課程總結.html'}, {'title': '編寫總結報告', 'text': '在軟體開發的過程中，有效的協作和版本控制是不可或缺的。GitHub作為一個廣泛使用的版本控制平台，提供了便捷的協作和代碼管理工具。最近，我開始使用Replit這個線上集成開發環境，並發現它不僅可以提供強大的開發功能，還能輕鬆地與GitHub集成，使得代碼維護變得更加順暢。 \n 首先，Replit提供了一個簡單易用的線上開發環境，無需事先安裝複雜的開發工具，只需打開瀏覽器即可進入開發界面。這大大減輕了新手入門的門檻，讓開發者能夠更快速地進入代碼編寫的階段。在Replit中，我可以輕鬆建立新的專案，選擇不同的編程語言，並且能夠即時預覽和運行我的代碼，這使得開發和測試變得非常高效。 \n 與GitHub的集成也是Replit的一個亮點。通過Replit，我可以直接將我的代碼與GitHub倉庫相連接，實現即時同步。這意味著我無需手動上傳代碼，只需在Replit中進行修改並提交，就能夠將變更同步到GitHub。這簡化了代碼管理的流程，減少了手動操作的瑣碎，同時確保了代碼庫的整潔和一致性。 \n 此外，Replit還提供了方便的協作功能，使得團隊合作變得更加輕鬆。我可以邀請其他開發者加入我的Replit專案，共同編輯和測試代碼。這種即時的協作環境使得團隊成員能夠實時溝通，解決問題，提高了開發效率。 \n 在使用Replit的過程中，我也發現了一些小缺點，例如有時在大型專案中可能會遇到性能問題，以及某些特殊語言或框架的支援可能較有限。但總的來說，Replit為GitHub的維護提供了一個便捷而高效的工具，特別適合初學者和小型團隊。 \n 總結而言，Replit作為一個線上開發環境，不僅簡化了開發流程，提供了即時的協作環境，還能夠與GitHub無縫集成，使得代碼的維護變得更加輕鬆。我對於使用Replit來維護GitHub的經驗感到滿意，相信它將成為未來我開發項目的一個重要工具。 \n', 'tags': '', 'url': '編寫總結報告.html'}, {'title': '錄製簡報影片', 'text': '', 'tags': '', 'url': '錄製簡報影片.html'}]};