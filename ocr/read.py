import easyocr  
# 创建reader对象，指定语言为简写中文  
# 该命令只需要运行一次就可以将model加载到内存中  
reader = easyocr.Reader(['ch_sim','en'])  
# 读取图像  
result = reader.readtext('chinese.jpg') 
