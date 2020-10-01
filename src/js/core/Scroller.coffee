Conf   = require('./Conf')
Tween  = require('./Tween')
Update = require('../libs/Update')
Resize = require('../libs/Resize')
Size   = require('../libs/obj/Size')


class Scroller

  constructor: ->

    @normal = 0
    @val = 0
    @docSize = new Size()
    @old = 0
    @d = 0

    @_document = $(document)

    @sw = 0
    @sh = 0

    @_cnt = 0

    @_buffer = -1

    @_move = {
      tg:0
    }

    @updateFlg = true

    @_init()



  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  _init: =>

    Update.add(@_update)
    Resize.add(@_resize, true)

    @_update()



  # -----------------------------------
  # 更新
  # -----------------------------------
  _update: =>

    if !@updateFlg
      return

    @_cnt++
    # if ++@_cnt % 30 == 0
    #   @val = $(window).scrollTop()
    #   @normal = @val / ($(document).height() - window.innerHeight)

    #if @_cnt % 3 == 0

    @old = @val
    @val = $(window).scrollTop()

    @d = Math.abs(@old - @val)


  # -----------------------------------------------
  # リサイズ
  # -----------------------------------------------
  _resize: =>

    @docSize.height = @_document.height()

    @sw = window.innerWidth
    @sh = window.innerHeight


  # -----------------------------------
  #
  # -----------------------------------
  change: (opt) =>

    if opt.mode == "set"
      @updateFlg = false
      @_document = opt.el
      @set(0)
      @_resize()
    else
      @updateFlg = true
      @_document = $(document)
      @set(opt.val)
      @_resize()

  # -----------------------------------
  #
  # -----------------------------------
  set: (val) =>

    $(window).scrollTop(val)

    @old = @val = val
    @d = 0


  # -----------------------------------
  #
  # -----------------------------------
  pause: =>

    @_buffer = $(window).scrollTop() / (@docSize.height - window.innerHeight)
    @setNormal(0)



  # -----------------------------------
  #
  # -----------------------------------
  resume: =>

    if @_buffer == -1
      return

    @setNormal(@_buffer)
    @_buffer = -1



  # -----------------------------------
  #
  # -----------------------------------
  setNormal: (val) =>

    s = (@docSize.height - window.innerHeight) * val
    $(window).scrollTop(s)



  # -----------------------------------
  #
  # -----------------------------------
  move: (opt) =>

    dura = opt.duration || 1
    delay = opt.delay || 0

    @_move.tg = $(window).scrollTop()
    Tween.a(@_move, {
      tg:opt.tg
    }, dura, delay, Power2.easeInOut, null, =>
      $(window).scrollTop(@_move.tg)
    )





module.exports = new Scroller()
