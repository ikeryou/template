dat    = require('dat-gui')
Conf   = require('./Conf')
Type   = require('./Type')
Func   = require('./Func')
Util   = require('../libs/Util')
Update = require('../libs/Update')
Resize = require('../libs/Resize')
Size   = require('../libs/obj/Size')


# ---------------------------------------------------
# パラメータ
# ---------------------------------------------------
class Param

  constructor: ->

    @_gui

    @camera = {
      pos:{value:15, min:9, max:20}
      z:{value:0, min:-100, max:100}
    }

    @_init()



  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  _init: =>

    Update.add(@_update)
    Resize.add(@_resize, true)
    @_update()

    if !Conf.FLG.PARAM
      return

    @_gui = new dat.GUI()
    @_addGui(@camera, 'camera')

    $('.dg').css('zIndex', 99999999)



  # -----------------------------------------------
  #
  # -----------------------------------------------
  _addGui: (obj, folderName) =>

    folder = @_gui.addFolder(folderName)

    for key,val of obj
      if !val.use?
        if key.indexOf('color') > 0
          folder.addColor(val, 'value').name(key)
        else
          if val.list?
            folder.add(val, 'value', val.list).name(key)
          else
            folder.add(val, 'value', val.min, val.max).name(key)



  # -----------------------------------------------
  #
  # -----------------------------------------------
  _listen: (param, name) =>

    if !name? then name = param
    @_gui.add(@, param).name(name).listen()



  # -----------------------------------
  # 更新
  # -----------------------------------
  _update: =>




  # -----------------------------------------------
  # リサイズ
  # -----------------------------------------------
  _resize: =>










module.exports = new Param()
