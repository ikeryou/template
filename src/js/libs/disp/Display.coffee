# ------------------------------------
# jQuery要素のラッパークラス
# ------------------------------------
class Display

  # ------------------------------------
  # コンストラクタ
  # ------------------------------------
  # @opt.el : 管理するjQuery要素
  # ------------------------------------
  constructor: (opt) ->

    @opt = opt || {}



  # -----------------------------------
  # 初期化
  # -----------------------------------
  init: =>



  # -----------------------------------
  # 破棄
  # -----------------------------------
  dispose: =>

    @opt = null



  # -----------------------------------
  # jQuery要素
  # -----------------------------------
  el: =>

    return @opt.el



  # -----------------------------------
  #
  # -----------------------------------
  find: (sel) =>

    return @el().find(sel)



  # -----------------------------------
  # classつける
  # -----------------------------------
  addClass: (c) =>

    @el().addClass(c)
    return @



  # -----------------------------------
  # class消す
  # -----------------------------------
  removeClass: (c) =>

    @el().removeClass(c)
    return @



module.exports = Display
