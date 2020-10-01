Util = require('../libs/Util')

class Conf

  constructor: ->

    # 本番フラグ
    @RELEASE = false

    # フラグ関連
    @FLG = {
      PARAM:false
      STATS:false
      DEBUG:location.href.indexOf('_m.html') > 0
      TEST:false
    };

    # 本番フラグがtrueの場合、フラグ関連は全てfalseに
    if @RELEASE
      for key,val of @FLG
        @FLG[key] = false

    # ブレイクポイント
    @BREAKPOINT = 750

    # 画像パス
    @PATH_IMG = '/assets/img/'

    @IS_PC = !isMobile.any
    @IS_SP = isMobile.any

    @IS_SIMPLE = isMobile.android.device || Util.isIE() || (!isMobile.any && Util.isSafari()) || isMobile.tablet

    @IS_WEBGL = Util.useWebGL()

    @SCALE_MIN = 0.000001






module.exports = new Conf()
