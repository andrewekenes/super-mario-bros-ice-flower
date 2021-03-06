namespace SpriteKind {
    export const ice = SpriteKind.create()
    export const ice_goomba = SpriteKind.create()
    export const ice_carry = SpriteKind.create()
    export const flower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    ice2 += 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -160
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ice2 == 1) {
        if (direction == 1) {
            iceball = sprites.createProjectileFromSprite(img`
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ................666666..................
                ...............669999666................
                ...............699999996................
                ...............699119966................
                ...............669999666................
                ................6699666.................
                .................6666...................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                `, mySprite, 100, 0)
        }
        if (direction == 2) {
            iceball = sprites.createProjectileFromSprite(img`
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ................666666..................
                ...............669999666................
                ...............699999996................
                ...............699119966................
                ...............669999666................
                ................6699666.................
                .................6666...................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                `, mySprite, -100, 0)
        }
        _throw += 1
        carry += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -160
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    lookup = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    pause(invincibility_period)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ice, function (sprite, otherSprite) {
    if (carry == 1) {
        carrying += 1
        mySprite.setKind(SpriteKind.ice_carry)
        otherSprite.follow(mySprite)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
})
scene.onHitWall(SpriteKind.ice_carry, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.kind() == SpriteKind.ice_carry) {
        if (direction == 1) {
            ice_goomba2 = sprites.createProjectileFromSprite(img`
                6 6 6 6 6 6 e e e e 6 6 6 6 6 6 
                6 6 6 6 6 e e e e e e 6 6 6 6 6 
                6 6 6 6 e e e e e e e e 6 6 6 6 
                6 6 6 e e e e e e e e e e 6 6 6 
                6 6 e f f e e e e e e f f e 6 6 
                6 e e e 1 f e e e e f 1 e e e 6 
                6 e e e 1 f f f f f f 1 e e e 6 
                e e e e 1 f 1 e e 1 f 1 e e e e 
                e e e e 1 1 1 e e 1 1 1 e e e e 
                e e e e e e e e e e e e e e e e 
                6 e e e e d d d d d d e e e e 6 
                6 6 6 6 d d d d d d d d 6 6 6 6 
                6 6 f f d d d d d d d d f f 6 6 
                6 f f f f f d d d d f f f f f 6 
                6 f f f f f f d d f f f f f f 6 
                6 6 f f f f f 6 6 f f f f f 6 6 
                `, mySprite, 100, 0)
            ice_goomba2.ay = 100
            mySprite.setKind(SpriteKind.Player)
            _throw += -1
            ice_goomba2.setKind(SpriteKind.ice_goomba)
            for (let value of sprites.allOfKind(SpriteKind.ice)) {
                value.destroy()
            }
        }
        if (direction == 2) {
            ice_goomba2 = sprites.createProjectileFromSprite(img`
                6 6 6 6 6 6 e e e e 6 6 6 6 6 6 
                6 6 6 6 6 e e e e e e 6 6 6 6 6 
                6 6 6 6 e e e e e e e e 6 6 6 6 
                6 6 6 e e e e e e e e e e 6 6 6 
                6 6 e f f e e e e e e f f e 6 6 
                6 e e e 1 f e e e e f 1 e e e 6 
                6 e e e 1 f f f f f f 1 e e e 6 
                e e e e 1 f 1 e e 1 f 1 e e e e 
                e e e e 1 1 1 e e 1 1 1 e e e e 
                e e e e e e e e e e e e e e e e 
                6 e e e e d d d d d d e e e e 6 
                6 6 6 6 d d d d d d d d 6 6 6 6 
                6 6 f f d d d d d d d d f f 6 6 
                6 f f f f f d d d d f f f f f 6 
                6 f f f f f f d d f f f f f f 6 
                6 6 f f f f f 6 6 f f f f f 6 6 
                `, mySprite, -100, 0)
            ice_goomba2.ay = 100
            mySprite.setKind(SpriteKind.Player)
            _throw += -1
            ice_goomba2.setKind(SpriteKind.ice_goomba)
            for (let value2 of sprites.allOfKind(SpriteKind.ice)) {
                value2.destroy()
            }
        }
    }
    lookup = 1
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    carry += -1
    if (carry == 1) {
        carrying += -1
    }
})
sprites.onOverlap(SpriteKind.ice_goomba, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setImage(assets.tile`myTile1`)
    otherSprite.setKind(SpriteKind.ice)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (ice2 == 1) {
        if (mySprite.vy > otherSprite.vy) {
            otherSprite.destroy()
        } else {
            pause(invincibility_period)
            ice2 += -1
        }
    } else {
        if (mySprite.vy > otherSprite.vy) {
            otherSprite.destroy()
        } else {
            if (lookup == 1) {
                otherSprite.destroy()
            }
            game.over(false)
        }
    }
})
let ice_goomba2: Sprite = null
let carrying = 0
let lookup = 0
let _throw = 0
let iceball: Sprite = null
let goomba: Sprite = null
let carry = 0
let direction = 0
let invincibility_period = 0
let ice2 = 0
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    .................22222..................
    ...............22222225.................
    ..............222222255.................
    ..............22222222222...............
    ..............eeeddeddd.................
    .............eddeddeedddd...............
    .............eddeedddddddd..............
    ............eeddeedddedddd..............
    ............eedddddeeeeee...............
    ............eeedddddeeeee...............
    ..............eedddddddd................
    ................ddddde..................
    ...............e2eeee2e.................
    ..............ee2eeee2ee................
    .............eee2eeee2eee...............
    ............eeee2eeee2eeee..............
    ............eee22eeee22eee..............
    ...........eeee22eeee22eeee.............
    ...........eeee22222222eeee.............
    ...........eeee25222252eeee.............
    ...........dddd22222222dddd.............
    ...........dddd22222222dddd.............
    ............ddd22222222ddd..............
    ............dd2222222222dd..............
    .............222222222222...............
    ............222222..222222..............
    ............22222....22222..............
    ............22222....22222..............
    .............eeee....eeee...............
    .............eeee....eeee...............
    ...........eeeeee....eeeeee.............
    ...........eeeeee....eeeeee.............
    `, SpriteKind.Player)
let instructions = "press up or A to jump and B to throw an ice-ball press B while on top of a frozen goomaba to pick it up then press down to thow it"
ice2 = 0
invincibility_period = 1000
direction = 1
carry = 0
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
game.showLongText(instructions, DialogLayout.Full)
for (let value3 of tiles.getTilesByType(assets.tile`myTile1`)) {
    goomba = sprites.create(img`
        . . . . . . e e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e f f e e e e e e f f e . . 
        . e e e 1 f e e e e f 1 e e e . 
        . e e e 1 f f f f f f 1 e e e . 
        e e e e 1 f 1 e e 1 f 1 e e e e 
        e e e e 1 1 1 e e 1 1 1 e e e e 
        e e e e e e e e e e e e e e e e 
        . e e e e d d d d d d e e e e . 
        . . . . d d d d d d d d . . . . 
        . . f f d d d d d d d d f f . . 
        . f f f f f d d d d f f f f f . 
        . f f f f f f d d f f f f f f . 
        . . f f f f f . . f f f f f . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(goomba, value3)
    tiles.setTileAt(value3, assets.tile`transparency16`)
}
game.onUpdate(function () {
    mySprite.setImage(img`
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        .................22222..................
        ...............22222225.................
        ..............222222255.................
        ..............22222222222...............
        ..............eeeddeddd.................
        .............eddeddeedddd...............
        .............eddeedddddddd..............
        ............eeddeedddedddd..............
        ............eedddddeeeeee...............
        ............eeedddddeeeee...............
        ..............eedddddddd................
        ................ddddde..................
        ...............e2eeee2e.................
        ..............ee2eeee2ee................
        .............eee2eeee2eee...............
        ............eeee2eeee2eeee..............
        ............eee22eeee22eee..............
        ...........eeee22eeee22eeee.............
        ...........eeee22222222eeee.............
        ...........eeee25222252eeee.............
        ...........dddd22222222dddd.............
        ...........dddd22222222dddd.............
        ............ddd22222222ddd..............
        ............dd2222222222dd..............
        .............222222222222...............
        ............222222..222222..............
        ............22222....22222..............
        ............22222....22222..............
        .............eeee....eeee...............
        .............eeee....eeee...............
        ...........eeeeee....eeeeee.............
        ...........eeeeee....eeeeee.............
        `)
    if (ice2 == 1) {
        mySprite.setImage(img`
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            .................66666..................
            ...............66666665.................
            ..............666666655.................
            ..............66666666666...............
            ..............222dd2ddd.................
            .............2dd2dd22dddd...............
            .............2dd22dddddddd..............
            ............22dd22ddd2dddd..............
            ............22ddddd222222...............
            ............222ddddd22222...............
            ..............22dddddddd................
            ................ddddd2..................
            ...............26222262.................
            ..............2262222622................
            .............222622226222...............
            ............22226222262222..............
            ............22266222266222..............
            ...........2222662222662222.............
            ...........2222666666662222.............
            ...........2222656666562222.............
            ...........dddd66666666dddd.............
            ...........dddd66666666dddd.............
            ............ddd66666666ddd..............
            ............dd6666666666dd..............
            .............666666666666...............
            ............666666..666666..............
            ............66666....66666..............
            ............66666....66666..............
            .............2222....2222...............
            .............2222....2222...............
            ...........222222....222222.............
            ...........222222....222222.............
            `)
    } else {
        mySprite.setImage(img`
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            .................22222..................
            ...............22222225.................
            ..............222222255.................
            ..............22222222222...............
            ..............eeeddeddd.................
            .............eddeddeedddd...............
            .............eddeedddddddd..............
            ............eeddeedddedddd..............
            ............eedddddeeeeee...............
            ............eeedddddeeeee...............
            ..............eedddddddd................
            ................ddddde..................
            ...............e2eeee2e.................
            ..............ee2eeee2ee................
            .............eee2eeee2eee...............
            ............eeee2eeee2eeee..............
            ............eee22eeee22eee..............
            ...........eeee22eeee22eeee.............
            ...........eeee22222222eeee.............
            ...........eeee25222252eeee.............
            ...........dddd22222222dddd.............
            ...........dddd22222222dddd.............
            ............ddd22222222ddd..............
            ............dd2222222222dd..............
            .............222222222222...............
            ............222222..222222..............
            ............22222....22222..............
            ............22222....22222..............
            .............eeee....eeee...............
            .............eeee....eeee...............
            ...........eeeeee....eeeeee.............
            ...........eeeeee....eeeeee.............
            `)
    }
    if (lookup == 1) {
        mySprite.setImage(img`
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ..................dd....................
            ...............2.dddee..................
            ...............2.dddeed.................
            .............552ddddeed.................
            ............2252dddeeede................
            ............2222deddeedd................
            ............2222eeddeddd................
            ............2222dddddddd................
            ............2222ddeedddd................
            .............222eeeedddd................
            .............222eddddde.................
            ..............22eddddee.................
            .................eeeee..................
            .............eee2eeee2eee...............
            ............eeee2eeee2eeee..............
            ...........eeeee2eeee2eeeee.............
            ...........eeeee2eeee2eeeee.............
            ..........eeeee22eeee22eeeee............
            ..........eeee222eeee222eeee............
            ..........eeee2222222222eeee............
            ..........dddd2252222522dddd............
            ..........dddd2222222222dddd............
            ...........ddd2222222222ddd.............
            ...........dd222222222222dd.............
            .............222222222222...............
            ............22222222222222..............
            ............222222..222222..............
            ............22222....22222..............
            ............22222....22222..............
            .............eeee....eeee...............
            .............eeee....eeee...............
            ...........eeeeee....eeeeee.............
            ...........eeeeee....eeeeee.............
            `)
        if (ice2 == 1) {
            mySprite.setImage(img`
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ..................dd....................
                ...............6.ddd22..................
                ...............6.ddd22d.................
                .............556dddd22d.................
                ............6656ddd222d2................
                ............6666d2dd22dd................
                ............666622dd2ddd................
                ............6666dddddddd................
                ............6666dd22dddd................
                .............6662222dddd................
                .............6662ddddd2.................
                ..............662dddd22.................
                .................22222..................
                .............222622226222...............
                ............22226222262222..............
                ...........2222262222622222.............
                ...........2222262222622222.............
                ..........222226622226622222............
                ..........222266622226662222............
                ..........222266666666662222............
                ..........dddd6656666566dddd............
                ..........dddd6666666666dddd............
                ...........ddd6666666666ddd.............
                ...........dd666666666666dd.............
                .............666666666666...............
                ............66666666666666..............
                ............666666..666666..............
                ............66666....66666..............
                ............66666....66666..............
                .............2222....2222...............
                .............2222....2222...............
                ...........222222....222222.............
                ...........222222....222222.............
                `)
        } else {
            mySprite.setImage(img`
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ..................dd....................
                ...............2.dddee..................
                ...............2.dddeed.................
                .............552ddddeed.................
                ............2252dddeeede................
                ............2222deddeedd................
                ............2222eeddeddd................
                ............2222dddddddd................
                ............2222ddeedddd................
                .............222eeeedddd................
                .............222eddddde.................
                ..............22eddddee.................
                .................eeeee..................
                .............eee2eeee2eee...............
                ............eeee2eeee2eeee..............
                ...........eeeee2eeee2eeeee.............
                ...........eeeee2eeee2eeeee.............
                ..........eeeee22eeee22eeeee............
                ..........eeee222eeee222eeee............
                ..........eeee2222222222eeee............
                ..........dddd2252222522dddd............
                ..........dddd2222222222dddd............
                ...........ddd2222222222ddd.............
                ...........dd222222222222dd.............
                .............222222222222...............
                ............22222222222222..............
                ............222222..222222..............
                ............22222....22222..............
                ............22222....22222..............
                .............eeee....eeee...............
                .............eeee....eeee...............
                ...........eeeeee....eeeeee.............
                ...........eeeeee....eeeeee.............
                `)
        }
    }
    if (mySprite.vy > 0) {
        mySprite.setImage(img`
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ......................ddd...............
            .....................ddedd..............
            ................22222ddeed..............
            ..............2222222ddddd..............
            .............22222222eeeee..............
            .............22222222222ee..............
            .............eeeddedddeeee..............
            ............eddeddedddddee..............
            ............eddeedddddddee..............
            ............eddeedddedddde..............
            ...........eedddddeeeeeee...............
            ...........eeeeddddeeeede...............
            .............eeddddddddee...............
            ..............2222ee2eeee...............
            ...........eeeeee22e2eee................
            ..........eeeeeeee2ee2ee................
            ..........eeeeeeee22e2e.................
            ..........eeddeeee22ee2.................
            ..........eddddee2222e5.................
            ..........ddddde2225222.................
            ..........ddddd22222222.................
            ..........dedd222222222..e..............
            ...........dd2222222222.ee..............
            .............222222222eeee..............
            .............e22222222eeee..............
            ..........eee2ee222222eeee..............
            ..........eee222ee2222eeee..............
            ..........eee22222..22eeee..............
            ..........eee22222......................
            ..........eee2222.......................
            ..........ee............................
            `)
        if (ice2 == 1) {
            mySprite.setImage(img`
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ......................ddd...............
                .....................dd2dd..............
                ................66666dd22d..............
                ..............6666666ddddd..............
                .............6666666622222..............
                .............6666666666622..............
                .............222dd2ddd2222..............
                ............2dd2dd2ddddd22..............
                ............2dd22ddddddd22..............
                ............2dd22ddd2dddd2..............
                ...........22ddddd2222222...............
                ...........2222dddd2222d2...............
                .............22dddddddd22...............
                ..............66662262222...............
                ...........2222226626222................
                ..........22222222622622................
                ..........2222222266262.................
                ..........22dd222266226.................
                ..........2dddd22666625.................
                ..........ddddd26665666.................
                ..........ddddd66666666.................
                ..........d2dd666666666..2..............
                ...........dd6666666666.22..............
                .............6666666662222..............
                .............2666666662222..............
                ..........2226226666662222..............
                ..........2226662266662222..............
                ..........22266666..662222..............
                ..........22266666......................
                ..........2226666.......................
                ..........22............................
                `)
        }
    }
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ......................ddd...............
            .....................ddedd..............
            ................22222ddeed..............
            ..............2222222ddddd..............
            .............22222222eeeee..............
            .............22222222222ee..............
            .............eeeddedddeeee..............
            ............eddeddedddddee..............
            ............eddeedddddddee..............
            ............eddeedddedddde..............
            ...........eedddddeeeeeee...............
            ...........eeeeddddeeeede...............
            .............eeddddddddee...............
            ..............2222ee2eeee...............
            ...........eeeeee22e2eee................
            ..........eeeeeeee2ee2ee................
            ..........eeeeeeee22e2e.................
            ..........eeddeeee22ee2.................
            ..........eddddee2222e5.................
            ..........ddddde2225222.................
            ..........ddddd22222222.................
            ..........dedd222222222..e..............
            ...........dd2222222222.ee..............
            .............222222222eeee..............
            .............e22222222eeee..............
            ..........eee2ee222222eeee..............
            ..........eee222ee2222eeee..............
            ..........eee22222..22eeee..............
            ..........eee22222......................
            ..........eee2222.......................
            ..........ee............................
            `)
        if (ice2 == 1) {
            mySprite.setImage(img`
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ........................................
                ......................ddd...............
                .....................dd2dd..............
                ................66666dd22d..............
                ..............6666666ddddd..............
                .............6666666622222..............
                .............6666666666622..............
                .............222dd2ddd2222..............
                ............2dd2dd2ddddd22..............
                ............2dd22ddddddd22..............
                ............2dd22ddd2dddd2..............
                ...........22ddddd2222222...............
                ...........2222dddd2222d2...............
                .............22dddddddd22...............
                ..............66662262222...............
                ...........2222226626222................
                ..........22222222622622................
                ..........2222222266262.................
                ..........22dd222266226.................
                ..........2dddd22666625.................
                ..........ddddd26665666.................
                ..........ddddd66666666.................
                ..........d2dd666666666..2..............
                ...........dd6666666666.22..............
                .............6666666662222..............
                .............2666666662222..............
                ..........2226226666662222..............
                ..........2226662266662222..............
                ..........22266666..662222..............
                ..........22266666......................
                ..........2226666.......................
                ..........22............................
                `)
        }
    }
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
})
