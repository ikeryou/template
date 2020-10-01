Entry = require('./core/Entry')


class Main extends Entry

  constructor: ->

    super()


  # -----------------------------------------------
  # 初期化
  # -----------------------------------------------
  init: =>

    super()

    console.log('init')





module.exports = Main

main = new Main()
main.init()
