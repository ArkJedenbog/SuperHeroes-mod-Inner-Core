/*
BUILD INFO:
  dir: dev
  target: SHMain.js
  files: 7
*/



// file: blocks.js

IDRegistry.genBlockID("vibraniumore");
Block.createBlock("vibraniumore", [{name: "Vibranium ore", texture: [["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0]], inCreative: true}]);



IDRegistry.genBlockID("kryptoniteore");
Block.createBlock("kryptoniteore", [{name: "Kryptonite ore", texture: [["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0]], inCreative: true}]);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.vibraniumore, 0, 6);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.kryptoniteore, 0, 3);
    }
}
)



Block.registerDropFunction("kryptoniteore", function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.krypton, 2, 0]);
 return drop;
});



Block.registerDropFunction("vibraniumore", function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.vibranium, 3, 0]);
 return drop;
});






































// file: materials.js






IDRegistry.genItemID("blackwool");
Item.createItem("blackwool", "Black wool", {name: "blackwool", meta: 0}, {stack: 64});


IDRegistry.genItemID("bluewool");
Item.createItem("bluewool", "Blue wool", {name: "bluewool", meta: 0}, {stack: 64});


IDRegistry.genItemID("darkbluewool");
Item.createItem("darkbluewool", "Dark blue wool", {name: "darkbluewool", meta: 0}, {stack: 64});


IDRegistry.genItemID("darkredwool");
Item.createItem("darkredwool", "Dark red wool", {name: "darkredwool", meta: 0}, {stack: 64});


IDRegistry.genItemID("darkvioletwool");
Item.createItem("darkvioletwool", "Dark violet wool", {name: "darkvioletwool", meta: 0}, {stack: 64});


IDRegistry.genItemID("orangewool");
Item.createItem("orangewool", "Orange wool", {name: "orangewool", meta: 0}, {stack: 64});


IDRegistry.genItemID("redwool");
Item.createItem("redwool", "Red wool", {name: "redwool", meta: 0}, {stack: 64});



IDRegistry.genItemID("violetwool");
Item.createItem("violetwool", "Violet wool", {name: "violetwool", meta: 0}, {stack: 64});


IDRegistry.genItemID("whitewool");
Item.createItem("whitewool", "White wool", {name: "whitewool", meta: 0}, {stack: 64});



IDRegistry.genItemID("graywool");
Item.createItem("graywool", "Gray wool", {name: "graywooll", meta: 0}, {stack: 64});






IDRegistry.genItemID("blackflint");
Item.createItem("blackflint", "Black flint", {name: "blackflint", meta: 0}, {stack: 64});


IDRegistry.genItemID("redflint");
Item.createItem("redflint", "Red flint", {name: "redflint", meta: 0}, {stack: 64});






IDRegistry.genItemID("blackingot");
Item.createItem("blackingot", "Black ingot", {name: "blackingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("redingot");
Item.createItem("redingot", "Red ingot", {name: "redingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("yellowingot");
Item.createItem("yellowingot", "Yellow ingot", {name: "yellowingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("greeningot");
Item.createItem("greeningot", "Green ingot", {name: "greeningot", meta: 0}, {stack: 64});


IDRegistry.genItemID("arkeniumingotsh");
Item.createItem("arkeniumingotsh", "Arkenium ingot", {name: "arkeniumingotsh", meta: 0}, {stack: 64});







IDRegistry.genItemID("blackleather");
Item.createItem("blackleather", "Black leather", {name: "blackleather", meta: 0}, {stack: 64});



IDRegistry.genItemID("blackleather");
Item.createItem("blackleather", "Black leather", {name: "blackleather", meta: 0}, {stack: 64});


IDRegistry.genItemID("greenleather");
Item.createItem("greenleather", "Green leather", {name: "greenleather", meta: 0}, {stack: 64});


IDRegistry.genItemID("redleather");
Item.createItem("redleather", "Red leather", {name: "redleather", meta: 0}, {stack: 64});



IDRegistry.genItemID("yellowleather");
Item.createItem("yellowleather", "Yellow leather", {name: "yellowleatherr", meta: 0}, {stack: 64});

IDRegistry.genItemID("blueleather");
Item.createItem("blueleather", "Blue leather", {name: "blueleatherr", meta: 0}, {stack: 64});

IDRegistry.genItemID("purpleleather");
Item.createItem("purpleleather", "Purple leather", {name: "purpleleather", meta: 0}, {stack: 64});






IDRegistry.genItemID("captainstar");
Item.createItem("captainstar", "Captain America star", {name: "captainstar", meta: 0}, {stack: 64});


IDRegistry.genItemID("generator");
Item.createItem("generator", "Generator", {name: "generator", meta: 0}, {stack: 64});




IDRegistry.genItemID("greenarrow");
Item.createItem("greenarrow", "Green arrow", {name: "greenarrow", meta: 0}, {stack: 64});


IDRegistry.genItemID("ironstick");
Item.createItem("ironstick", "Iron stick", {name: "ironstick", meta: 0}, {stack: 64});


IDRegistry.genItemID("krypton");
Item.createItem("krypton", "Kryptonite", {name: "krypton", meta: 0}, {stack: 64});


IDRegistry.genItemID("vibranium");
Item.createItem("vibranium", "Vibranium", {name: "vibranium", meta: 0}, {stack: 64});


IDRegistry.genItemID("raccoonwool");
Item.createItem("raccoonwool", "Raccoon fur", {name: "raccoonwool", meta: 0}, {stack: 64});












// file: costumes.js

IDRegistry.genItemID("batmanhelmet");
IDRegistry.genItemID("batmanchestplate");
IDRegistry.genItemID("batmanleggings");
IDRegistry.genItemID("batmanboots");

Item.createArmorItem("batmanhelmet", "Batman helmet", {name: "batman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/batman1.png"});
Item.createArmorItem("batmanchestplate", "Batman chestplate", {name: "batman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/batman3.png"});
Item.createArmorItem("batmanleggings", "Batman leggings", {name: "batman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/batman0.png"});
Item.createArmorItem("batmanboots", "Batman boots", {name: "batman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/batman2.png"});


IDRegistry.genItemID("captainamericahelmet");
IDRegistry.genItemID("captainamericachestplate");
IDRegistry.genItemID("captainamericaleggings");
IDRegistry.genItemID("captainamericaboots");

Item.createArmorItem("captainamericahelmet", "Captain America helmet", {name: "captainamerica4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/captainamerica1.png"});
Item.createArmorItem("captainamericachestplate", "Captain America chestplate", {name: "captainamerica5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/captainamerica3.png"});
Item.createArmorItem("captainamericaleggings", "Captain America leggings", {name: "captainamerica6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/captainamerica0.png"});
Item.createArmorItem("captainamericaboots", "Captain America boots", {name: "captainamerica7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/captainamerica2.png"});



IDRegistry.genItemID("catwomanhelmet");
IDRegistry.genItemID("catwomanchestplate");
IDRegistry.genItemID("catwomanleggings");
IDRegistry.genItemID("catwomanboots");

Item.createArmorItem("catwomanhelmet", "Catwoman helmet", {name: "catwoman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/catwoman1.png"});
Item.createArmorItem("catwomanchestplate", "Catwoman chestplate", {name: "catwoman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/catwoman3.png"});
Item.createArmorItem("catwomanleggings", "Catwoman leggings", {name: "catwoman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/catwoman0.png"});
Item.createArmorItem("catwomanboots", "Catwoman boots", {name: "catwoman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/catwoman2.png"});




IDRegistry.genItemID("flashhelmet");
IDRegistry.genItemID("flashchestplate");
IDRegistry.genItemID("flashleggings");
IDRegistry.genItemID("flashboots");

Item.createArmorItem("flashhelmet", "Flash helmet", {name: "flash2", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/flash6.png"});
Item.createArmorItem("flashchestplate", "Flash chestplate", {name: "flash3", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/flash8.png"});
Item.createArmorItem("flashleggings", "Flash leggings", {name: "flash4", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/flash.png"});
Item.createArmorItem("flashboots", "Flash boots", {name: "flash5", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/flash7.png"});





IDRegistry.genItemID("gamorahelmet");
IDRegistry.genItemID("gamorachestplate");
IDRegistry.genItemID("gamoraleggings");
IDRegistry.genItemID("gamoraboots");

Item.createArmorItem("gamorahelmet", "Gamora helmet", {name: "gamora4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/gamora1.png"});
Item.createArmorItem("gamorachestplate", "Gamora chestplate", {name: "gamora5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/gamora3.png"});
Item.createArmorItem("gamoraleggings", "Gamora leggings", {name: "gamora6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/gamora0.png"});
Item.createArmorItem("gamoraboots", "Gamora boots", {name: "gamora7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/gamora2.png"});


IDRegistry.genItemID("greenarrowhelmet");
IDRegistry.genItemID("greenarrowchestplate");
IDRegistry.genItemID("greenarrowleggings");
IDRegistry.genItemID("greenarrowboots");

Item.createArmorItem("greenarrowhelmet", "Green Arrow helmet", {name: "greenarrow4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/greenarrow1.png"});
Item.createArmorItem("greenarrowchestplate", "Green Arrow chestplate", {name: "greenarrow5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/greenarrow3.png"});
Item.createArmorItem("greenarrowleggings", "Green Arrow leggings", {name: "greenarrow6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/greenarrow0.png"});
Item.createArmorItem("greenarrowboots", "Green Arrow boots", {name: "greenarrow7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/greenarrow2.png"});










IDRegistry.genItemID("hawkeyechestplate");
IDRegistry.genItemID("hawkeyeleggings");
IDRegistry.genItemID("hawkeyeboots");

Item.createArmorItem("hawkeyechestplate", "Hawk Eye chestplate", {name: "hawkeye4", meta: 0}, {type: "chestplate", armor: 14, durability: 750, texture: "armor/hawkeye3.png"});
Item.createArmorItem("hawkeyeleggings", "Hawk Eye leggings", {name: "hawkeye6", meta: 0}, {type: "leggings", armor: 11, durability: 700, texture: "armor/hawkeye0.png"});
Item.createArmorItem("hawkeyeboots", "Hawk Eye boots", {name: "hawkeye7", meta: 0}, {type: "boots", armor: 8, durability: 600, texture: "armor/hawkeye2.png"});



IDRegistry.genItemID("ironmanhelmet");
IDRegistry.genItemID("ironmanchestplate");
IDRegistry.genItemID("ironmanleggings");
IDRegistry.genItemID("ironmanboots");

Item.createArmorItem("ironmanhelmet", "Iron Man helmet", {name: "ironman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/ironman.png"});
Item.createArmorItem("ironmanchestplate", "Iron Man chestplate", {name: "ironman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/ironman.png"});
Item.createArmorItem("ironmanleggings", "Iron Man leggings", {name: "ironman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/ironman0.png"});
Item.createArmorItem("ironmanboots", "Iron Man boots", {name: "ironman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/ironman.png"});





IDRegistry.genItemID("rocketracoonhelmet");
IDRegistry.genItemID("rocketracoonchestplate");
IDRegistry.genItemID("rocketracoonleggings");
IDRegistry.genItemID("rocketracoonboots");

Item.createArmorItem("rocketracoonhelmet", "Rocket helmet", {name: "rocketracoon4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/rocketarmor.png"});
Item.createArmorItem("rocketracoonchestplate", "Rocket chestplate", {name: "rocketracoon5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/rocketarmor.png"});
Item.createArmorItem("rocketracoonleggings", "Rocket leggings", {name: "rocketracoon6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/rocketarmor0.png"});
Item.createArmorItem("rocketracoonboots", "Rocket boots", {name: "rocketracoon7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/rocketarmor.png"});






IDRegistry.genItemID("sokolhelmet");
IDRegistry.genItemID("sokolchestplate");
IDRegistry.genItemID("sokolleggings");
IDRegistry.genItemID("sokolboots");

Item.createArmorItem("sokolhelmet", "Falcon helmet", {name: "sokol4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sokol1.png"});
Item.createArmorItem("sokolchestplate", "Falcon chestplate", {name: "sokol5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sokol3.png"});
Item.createArmorItem("sokolleggings", "Falcon leggings", {name: "sokol6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sokol0.png"});
Item.createArmorItem("sokolboots", "Falcon boots", {name: "sokol7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sokol2.png"});






IDRegistry.genItemID("starlordhelmet");
IDRegistry.genItemID("starlordchestplate");
IDRegistry.genItemID("starlordleggings");
IDRegistry.genItemID("starlordboots");

Item.createArmorItem("starlordhelmet", "Star Lord helmet", {name: "starlord4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/starlord1.png"});
Item.createArmorItem("starlordchestplate", "Star Lord chestplate", {name: "starlord5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/starlord3.png"});
Item.createArmorItem("starlordleggings", "Star Lord leggings", {name: "starlord6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/starlord0.png"});
Item.createArmorItem("starlordboots", "Star Lord boots", {name: "starlord7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/starlord2.png"});





IDRegistry.genItemID("spidermanhelmet");
IDRegistry.genItemID("spidermanchestplate");
IDRegistry.genItemID("spidermanleggings");
IDRegistry.genItemID("spidermanboots");

Item.createArmorItem("spidermanhelmet", "Spider Man helmet", {name: "spiderman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/spiderman1.png"});
Item.createArmorItem("spidermanchestplate", "Spider Man chestplate", {name: "spiderman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/spiderman3.png"});
Item.createArmorItem("spidermanleggings", "Spider Man leggings", {name: "spiderman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/spiderman.png"});
Item.createArmorItem("spidermanboots", "Spider Man boots", {name: "spiderman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/spiderman2.png"});







IDRegistry.genItemID("supermanchestplate");
IDRegistry.genItemID("supermanleggings");
IDRegistry.genItemID("supermanboots");

Item.createArmorItem("supermanchestplate", "Superman chestplate", {name: "superman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/superman3.png"});
Item.createArmorItem("supermanleggings", "Superman leggings", {name: "superman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/superman0.png"});
Item.createArmorItem("supermanboots", "Superman boots", {name: "superman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/superman2.png"});




IDRegistry.genItemID("antmanhelmet");
IDRegistry.genItemID("antmanchestplate");
IDRegistry.genItemID("antmanleggings");
IDRegistry.genItemID("antmanboots");

Item.createArmorItem("antmanhelmet", "Ant Man helmet", {name: "antman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/antman1.png"});
Item.createArmorItem("antmanchestplate", "Ant Man chestplate", {name: "antman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/antman3.png"});
Item.createArmorItem("antmanleggings", "Ant Man leggings", {name: "antman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/antman0.png"});
Item.createArmorItem("antmanboots", "Ant Man boots", {name: "antman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/antman2.png"});











IDRegistry.genItemID("blackspidermanhelmet");
IDRegistry.genItemID("blackspidermanchestplate");
IDRegistry.genItemID("blackspidermanleggings");
IDRegistry.genItemID("blackspidermanboots");

Item.createArmorItem("blackspidermanhelmet", "Black Spider Man helmet", {name: "blackspidermanhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/blackspidermanarmor.png"});
Item.createArmorItem("blackspidermanchestplate", "Black Spider Man chestplate", {name: "blackspidermanchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/blackspidermanarmor.png"});
Item.createArmorItem("blackspidermanleggings", "Black Spider Man leggings", {name: "blackspidermanleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/blackspidermanarmor0.png"});
Item.createArmorItem("blackspidermanboots", "Black Spider Man boots", {name: "blackspidermanboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/blackspidermanarmor.png"});







IDRegistry.genItemID("hulkhelmet");
IDRegistry.genItemID("hulkchestplate");
IDRegistry.genItemID("hulkleggings");
IDRegistry.genItemID("hulkboots");

Item.createArmorItem("hulkhelmet", "Hulk helmet", {name: "hulkhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/hulkarmor.png"});
Item.createArmorItem("hulkchestplate", "Hulk chestplate", {name: "hulkchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/hulkarmor.png"});
Item.createArmorItem("hulkleggings", "Hulk leggings", {name: "hulkleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/hulkarmor0.png"});
Item.createArmorItem("hulkboots", "Hulk boots", {name: "hulkboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/hulkarmor.png"});



IDRegistry.genItemID("thorhelmet");
IDRegistry.genItemID("thorchestplate");
IDRegistry.genItemID("thorleggings");
IDRegistry.genItemID("thorboots");

Item.createArmorItem("thorhelmet", "Thor helmet", {name: "thorhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/thorarmor.png"});
Item.createArmorItem("thorchestplate", "Thor chestplate", {name: "thorchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/thorarmor.png"});
Item.createArmorItem("thorleggings", "Thor leggings", {name: "thorleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/thorarmor0.png"});
Item.createArmorItem("thorboots", "Thor boots", {name: "thorboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/thorarmor.png"});





IDRegistry.genItemID("blackwidowchestplate");
IDRegistry.genItemID("blackwidowleggings");
IDRegistry.genItemID("blackwidowboots");

Item.createArmorItem("blackwidowchestplate", "Black Widow chestplate", {name: "blackwidowchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/blackwidowarmor.png"});
Item.createArmorItem("blackwidowleggings", "Black Widow leggings", {name: "blackwidowleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/blackwidowarmor0.png"});
Item.createArmorItem("blackwidowboots", "Black Widow boots", {name: "blackwidowboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/blackwidowarmor.png"});







IDRegistry.genItemID("groothelmet");
IDRegistry.genItemID("grootchestplate");
IDRegistry.genItemID("grootleggings");
IDRegistry.genItemID("grootboots");

Item.createArmorItem("groothelmet", "Groot helmet", {name: "groothelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/grootarmor.png"});
Item.createArmorItem("grootchestplate", "Groot chestplate", {name: "grootchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/grootarmor.png"});
Item.createArmorItem("grootleggings", "Groot leggings", {name: "grootleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/grootarmor0.png"});
Item.createArmorItem("grootboots", "Groot boots", {name: "grootboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/grootarmor.png"});





IDRegistry.genItemID("draxhelmet");
IDRegistry.genItemID("draxchestplate");
IDRegistry.genItemID("draxleggings");
IDRegistry.genItemID("draxboots");

Item.createArmorItem("draxhelmet", "Drax helmet", {name: "draxhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/draxarmor.png"});
Item.createArmorItem("draxchestplate", "Drax chestplate", {name: "draxchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/draxarmor.png"});
Item.createArmorItem("draxleggings", "Drax leggings", {name: "draxleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/draxarmor0.png"});
Item.createArmorItem("draxboots", "Drax boots", {name: "draxboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/draxarmor.png"});






IDRegistry.genItemID("quicksilverchestplate");
IDRegistry.genItemID("quicksilverleggings");
IDRegistry.genItemID("quicksilverboots");

Item.createArmorItem("quicksilverchestplate", "Quicksilver chestplate", {name: "quicksilverchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/quicksilverarmor.png"});
Item.createArmorItem("quicksilverleggings", "Quicksilver leggings", {name: "quicksilverleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/quicksilverarmor0.png"});
Item.createArmorItem("quicksilverboots", "Quicksilver boots", {name: "quicksilverboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/quicksilverarmor.png"});


IDRegistry.genItemID("doctorstrangechestplate");
IDRegistry.genItemID("doctorstrangeleggings");
IDRegistry.genItemID("doctorstrangeboots");

Item.createArmorItem("doctorstrangechestplate", "Doctor Strange chestplate", {name: "doctorstrangechestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/doctorstrangearmor.png"});
Item.createArmorItem("doctorstrangeleggings", "Doctor Strange leggings", {name: "doctorstrangeleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/doctorstrangearmor0.png"});
Item.createArmorItem("doctorstrangeboots", "Doctor Strange boots", {name: "doctorstrangeboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/doctorstrangearmor.png"});

IDRegistry.genItemID("jonduhelmet");
IDRegistry.genItemID("jonduchestplate");
IDRegistry.genItemID("jonduleggings");
IDRegistry.genItemID("jonduboots");

Item.createArmorItem("jonduhelmet", "Yondu helmet", {name: "jonduhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/jonduarmor.png"});
Item.createArmorItem("jonduchestplate", "Yondu chestplate", {name: "jonduchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/jonduarmor.png"});
Item.createArmorItem("jonduleggings", "Yondu leggings", {name: "jonduleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/jonduarmor0.png"});
Item.createArmorItem("jonduboots", "Yondu boots", {name: "jonduboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/jonduarmor.png"});



IDRegistry.genItemID("nebulahelmet");
IDRegistry.genItemID("nebulachestplate");
IDRegistry.genItemID("nebulaleggings");
IDRegistry.genItemID("nebulaboots");

Item.createArmorItem("nebulahelmet", "Nebula helmet", {name: "nebulahelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/nebulaarmor.png"});
Item.createArmorItem("nebulachestplate", "Nebula chestplate", {name: "nebulachestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/nebulaarmor.png"});
Item.createArmorItem("nebulaleggings", "Nebula leggings", {name: "nebulaleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/nebulaarmor0.png"});
Item.createArmorItem("nebulaboots", "Nebula boots", {name: "nebulaboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/nebulaarmor.png"})

IDRegistry.genItemID("mantishelmet");
IDRegistry.genItemID("mantischestplate");
IDRegistry.genItemID("mantisleggings");
IDRegistry.genItemID("mantisboots");

Item.createArmorItem("mantishelmet", "Mantis helmet", {name: "mantishelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/mantisarmor.png"});
Item.createArmorItem("mantischestplate", "Mantis chestplate", {name: "mantischestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/mantisarmor.png"});
Item.createArmorItem("mantisleggings", "Mantis leggings", {name: "mantisleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/mantisarmor0.png"});
Item.createArmorItem("mantisboots", "Mantis boots", {name: "mantisboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/mantisarmor.png"});



IDRegistry.genItemID("lokihelmet");
IDRegistry.genItemID("lokichestplate");
IDRegistry.genItemID("lokileggings");
IDRegistry.genItemID("lokiboots");

Item.createArmorItem("lokihelmet", "Loki helmet", {name: "lokihelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/lokiarmor.png"});
Item.createArmorItem("lokichestplate", "Loki chestplate", {name: "lokichestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/lokiarmor.png"});
Item.createArmorItem("lokileggings", "Loki leggings", {name: "lokileggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/lokiarmor0.png"});
Item.createArmorItem("lokiboots", "Loki boots", {name: "lokiboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/lokiarmor.png"});









IDRegistry.genItemID("blackpanterhelmet");
IDRegistry.genItemID("blackpanterchestplate");
IDRegistry.genItemID("blackpanterleggings");
IDRegistry.genItemID("blackpanterboots");

Item.createArmorItem("blackpanterhelmet", "Black Panther helmet", {name: "blackpanterhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/blackpanterarmor.png"});
Item.createArmorItem("blackpanterchestplate", "Black Panther chestplate", {name: "blackpanterchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/blackpanterarmor.png"});
Item.createArmorItem("blackpanterleggings", "Black Panther leggings", {name: "blackpanterleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/blackpanterarmor0.png"});
Item.createArmorItem("blackpanterboots", "Black Panther boots", {name: "blackpanterboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/blackpanterarmor.png"});



IDRegistry.genItemID("ghostriderhelmet");
IDRegistry.genItemID("ghostriderchestplate");
IDRegistry.genItemID("ghostriderleggings");
IDRegistry.genItemID("ghostriderboots");

Item.createArmorItem("ghostriderhelmet", "Ghost Rider helmet", {name: "ghostriderhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/ghostriderarmor.png"});
Item.createArmorItem("ghostriderchestplate", "Ghost Rider chestplate", {name: "ghostriderchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/ghostriderarmor.png"});
Item.createArmorItem("ghostriderleggings", "Ghost Rider leggings", {name: "ghostriderleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/ghostriderarmor0.png"});
Item.createArmorItem("ghostriderboots", "Ghost Rider boots", {name: "ghostriderboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/ghostriderarmor.png"});



IDRegistry.genItemID("deadpoolhelmet");
IDRegistry.genItemID("deadpoolchestplate");
IDRegistry.genItemID("deadpoolleggings");
IDRegistry.genItemID("deadpoolboots");

Item.createArmorItem("deadpoolhelmet", "Deadpool helmet", {name: "deadpoolhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/deadpoolarmor.png"});
Item.createArmorItem("deadpoolchestplate", "Deadpool chestplate", {name: "deadpoolchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/deadpoolarmor.png"});
Item.createArmorItem("deadpoolleggings", "Deadpool leggings", {name: "deadpoolleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/deadpoolarmor0.png"});
Item.createArmorItem("deadpoolboots", "Deadpool boots", {name: "deadpoolboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/deadpoolarmor.png"});








IDRegistry.genItemID("scarletwitchchestplate");
IDRegistry.genItemID("scarletwitchleggings");
IDRegistry.genItemID("scarletwitchboots");

Item.createArmorItem("scarletwitchchestplate", "Scarlet Witch chestplate", {name: "scarletwitchchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/scarletwitcharmor.png"});
Item.createArmorItem("scarletwitchleggings", "Scarlet Witch leggings", {name: "scarletwitchleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/scarletwitcharmor0.png"});
Item.createArmorItem("scarletwitchboots", "Scarlet Witch boots", {name: "scarletwitchboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/scarletwitcharmor.png"});







IDRegistry.genItemID("beasthelmet");
IDRegistry.genItemID("beastchestplate");
IDRegistry.genItemID("beastleggings");
IDRegistry.genItemID("beastboots");

Item.createArmorItem("beasthelmet", "Beast helmet", {name: "beasthelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/beastarmor.png"});
Item.createArmorItem("beastchestplate", "Beast chestplate", {name: "beastchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/beastarmor.png"});
Item.createArmorItem("beastleggings", "Beast leggings", {name: "beastleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/beastarmor0.png"});
Item.createArmorItem("beastboots", "Beast boots", {name: "beastboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/beastarmor.png"});






IDRegistry.genItemID("fenixchestplate");
IDRegistry.genItemID("fenixleggings");
IDRegistry.genItemID("fenixboots");

Item.createArmorItem("fenixchestplate", "Fenix chestplate", {name: "fenixchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/fenixarmor.png"});
Item.createArmorItem("fenixleggings", "Fenix leggings", {name: "fenixleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/fenixarmor0.png"});
Item.createArmorItem("fenixboots", "Fenix boots", {name: "fenixboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/fenixarmor.png"});



IDRegistry.genItemID("cyclopshelmet");
IDRegistry.genItemID("cyclopschestplate");
IDRegistry.genItemID("cyclopsleggings");
IDRegistry.genItemID("cyclopsboots");

Item.createArmorItem("cyclopshelmet", "Cyclop helmet", {name: "cyclopshelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/cyclopsarmor.png"});
Item.createArmorItem("cyclopschestplate", "Cyclop chestplate", {name: "cyclopschestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/cyclopsarmor.png"});
Item.createArmorItem("cyclopsleggings", "Cyclop leggings", {name: "cyclopsleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/cyclopsarmor0.png"});
Item.createArmorItem("cyclopsboots", "Cyclop boots", {name: "cyclopsboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/cyclopsarmor.png"});



IDRegistry.genItemID("wonderwomanhelmet");
IDRegistry.genItemID("wonderwomanchestplate");
IDRegistry.genItemID("wonderwomanleggings");
IDRegistry.genItemID("wonderwomanboots");

Item.createArmorItem("wonderwomanhelmet", "Wonder Woman helmet", {name: "wonderwomanhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/wonderwomanarmor.png"});
Item.createArmorItem("wonderwomanchestplate", "Wonder Woman chestplate", {name: "wonderwomanchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/wonderwomanarmor.png"});
Item.createArmorItem("wonderwomanleggings", "Wonder Woman leggings", {name: "wonderwomanleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/wonderwomanarmor0.png"});
Item.createArmorItem("wonderwomanboots", "Wonder Woman boots", {name: "wonderwomanboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/wonderwomanarmor.png"});










IDRegistry.genItemID("aquamanchestplate");
IDRegistry.genItemID("aquamanleggings");
IDRegistry.genItemID("aquamanboots");

Item.createArmorItem("aquamanchestplate", "Aquaman chestplate", {name: "aquamanchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/aquamanarmor.png"});
Item.createArmorItem("aquamanleggings", "Aquaman leggings", {name: "aquamanleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/aquamanarmor0.png"});
Item.createArmorItem("aquamanboots", "Aquaman boots", {name: "aquamanboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/aquamanarmor.png"});











IDRegistry.genItemID("greenlanternhelmet");
IDRegistry.genItemID("greenlanternchestplate");
IDRegistry.genItemID("greenlanternleggings");
IDRegistry.genItemID("greenlanternboots");

Item.createArmorItem("greenlanternhelmet", "Green Lantern helmet", {name: "greenlanternhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/greenlanternarmor.png"});
Item.createArmorItem("greenlanternchestplate", "Green Lantern chestplate", {name: "greenlanternchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/greenlanternarmor.png"});
Item.createArmorItem("greenlanternleggings", "Green Lantern leggings", {name: "greenlanternleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/greenlanternarmor0.png"});
Item.createArmorItem("greenlanternboots", "Green Lantern boots", {name: "greenlanternboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/greenlanternarmor.png"});











IDRegistry.genItemID("dexstarrhelmet");
IDRegistry.genItemID("dexstarrchestplate");
IDRegistry.genItemID("dexstarrleggings");
IDRegistry.genItemID("dexstarrboots");

Item.createArmorItem("dexstarrhelmet", "Dex Starr helmet", {name: "dexstarrhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/dexstarrarmor.png"});
Item.createArmorItem("dexstarrchestplate", "Dex Starr chestplate", {name: "dexstarrchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/dexstarrarmor.png"});
Item.createArmorItem("dexstarrleggings", "Dex Starr leggings", {name: "dexstarrleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/dexstarrarmor0.png"});
Item.createArmorItem("dexstarrboots", "Dex Starr boots", {name: "dexstarrboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/dexstarrarmor.png"});











IDRegistry.genItemID("phantomhelmet");
IDRegistry.genItemID("phantomchestplate");
IDRegistry.genItemID("phantomleggings");
IDRegistry.genItemID("phantomboots");

Item.createArmorItem("phantomhelmet", "Phantom helmet", {name: "phantomhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/phantomarmor.png"});
Item.createArmorItem("phantomchestplate", "Phantom chestplate", {name: "phantomchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/phantomarmor.png"});
Item.createArmorItem("phantomleggings", "Phantom leggings", {name: "phantomleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/phantomarmor0.png"});
Item.createArmorItem("phantomboots", "Phantom boots", {name: "phantomboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/phantomarmor.png"});


IDRegistry.genItemID("ironspidermanhelmet");
IDRegistry.genItemID("ironspidermanchestplate");
IDRegistry.genItemID("ironspidermanleggings");
IDRegistry.genItemID("ironspidermanboots");

Item.createArmorItem("ironspidermanhelmet", "Iron Spider Man helmet", {name: "ironspidermanhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/ironspidermanarmor.png"});
Item.createArmorItem("ironspidermanchestplate", "Iron Spider Man chestplate", {name: "ironspidermanchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/ironspidermanarmor.png"});
Item.createArmorItem("ironspidermanleggings", "Iron Spider Man leggings", {name: "ironspidermanleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/ironspidermanarmor0.png"});
Item.createArmorItem("ironspidermanboots", "Iron Spider Man boots", {name: "ironspidermanboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/ironspidermanarmor.png"});

IDRegistry.genItemID("visionhelmet");
IDRegistry.genItemID("visionchestplate");
IDRegistry.genItemID("visionleggings");
IDRegistry.genItemID("visionboots");

Item.createArmorItem("visionhelmet", "Vision helmet", {name: "visionhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/visionarmor.png"});
Item.createArmorItem("visionchestplate", "Vision chestplate", {name: "visionchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/visionarmor.png"});
Item.createArmorItem("visionleggings", "Vision leggings", {name: "visionleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/visionarmor0.png"});
Item.createArmorItem("visionboots", "Vision boots", {name: "visionboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/visionarmor.png"});



IDRegistry.genItemID("flashserialhelmet");
IDRegistry.genItemID("flashserialchestplate");
IDRegistry.genItemID("flashserialleggings");
IDRegistry.genItemID("flashserialboots");

Item.createArmorItem("flashserialhelmet", "Flash helmet", {name: "flashserialhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/flashserialarmor.png"});
Item.createArmorItem("flashserialchestplate", "Flash chestplate", {name: "flashserialchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/flashserialarmor.png"});
Item.createArmorItem("flashserialleggings", "Flash leggings", {name: "flashserialleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/flashserialarmor0.png"});
Item.createArmorItem("flashserialboots", "Flash boots", {name: "flashserialboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/flashserialarmor.png"});


IDRegistry.genItemID("spawnhelmet");
IDRegistry.genItemID("spawnchestplate");
IDRegistry.genItemID("spawnleggings");
IDRegistry.genItemID("spawnboots");

Item.createArmorItem("spawnhelmet", "Spawn helmet", {name: "spawnhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/spawnarmor.png"});
Item.createArmorItem("spawnchestplate", "Spawn chestplate", {name: "spawnchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/spawnarmor.png"});
Item.createArmorItem("spawnleggings", "Spawn leggings", {name: "spawnleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/spawnarmor0.png"});
Item.createArmorItem("spawnboots", "Spawn boots", {name: "spawnboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/spawnarmor.png"});





























IDRegistry.genItemID("acceleratorhelmet");
IDRegistry.genItemID("acceleratorchestplate");
IDRegistry.genItemID("acceleratorleggings");
IDRegistry.genItemID("acceleratorboots");

Item.createArmorItem("acceleratorhelmet", "Accelerator helmet", {name: "acceleratorhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/acceleratorarmor.png"});
Item.createArmorItem("acceleratorchestplate", "Accelerator chestplate", {name: "acceleratorchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/acceleratorarmor.png"});
Item.createArmorItem("acceleratorleggings", "Accelerator leggings", {name: "acceleratorleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/acceleratorarmor0.png"});
Item.createArmorItem("acceleratorboots", "Accelerator boots", {name: "acceleratorboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/acceleratorarmor.png"});

IDRegistry.genItemID("arkshelmet");
IDRegistry.genItemID("arkschestplate");
IDRegistry.genItemID("arksleggings");
IDRegistry.genItemID("arksboots");

Item.createArmorItem("arkshelmet", "Ark helmet", {name: "arkshelmet", meta: 0}, {type: "helmet", armor: 4815162342, durability: 4815162342, texture: "armor/arksarmor.png"});
Item.createArmorItem("arkschestplate", "Ark cheatplate", {name: "arkschestplate", meta: 0}, {type: "chestplate", armor: 4815162342, durability: 4815162342, texture: "armor/arksarmor.png"});
Item.createArmorItem("arksleggings", "Ark leggings", {name: "arksleggings", meta: 0}, {type: "leggings", armor: 4815162342, durability: 4815162342, texture: "armor/arksarmor0.png"});
Item.createArmorItem("arksboots", "Ark boots", {name: "arksboots", meta: 0}, {type: "boots", armor: 4815162342, durability: 4815162342, texture: "armor/arksarmor.png"});




// file: effects.js

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.batmanhelmet && chest.id == ItemID.batmanchestplate && legs.id == ItemID.batmanleggings && boots.id == ItemID.batmanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.captainamericahelmet && chest.id == ItemID.captainamericachestplate && legs.id == ItemID.captainamericaleggings && boots.id == ItemID.captainamericaboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.catwomanhelmet && chest.id == ItemID.catwomanchestplate && legs.id == ItemID.catwomanleggings && boots.id == ItemID.catwomanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.flashhelmet && chest.id == ItemID.flashchestplate && legs.id == ItemID.flashleggings && boots.id == ItemID.flashboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 250, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.gamorahelmet && chest.id == ItemID.gamorachestplate && legs.id == ItemID.gamoraleggings && boots.id == ItemID.gamoraboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.greenarrowhelmet && chest.id == ItemID.greenarrowchestplate && legs.id == ItemID.greenarrowleggings && boots.id == ItemID.greenarrowboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    
    
    
    if (chest.id == ItemID.hawkeyechestplate && legs.id == ItemID.hawkeyeleggings && boots.id == ItemID.hawkeyeboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.ironmanhelmet && chest.id == ItemID.ironmanchestplate && legs.id == ItemID.ironmanleggings && boots.id == ItemID.ironmanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    if (helmet.id == ItemID.rocketracoonhelmet && chest.id == ItemID.rocketracoonchestplate && legs.id == ItemID.rocketracoonleggings && boots.id == ItemID.rocketracoonboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.sokolhelmet && chest.id == ItemID.sokolchestplate && legs.id == ItemID.sokolleggings && boots.id == ItemID.sokolboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    
    if (helmet.id == ItemID.starlordhelmet && chest.id == ItemID.starlordchestplate && legs.id == ItemID.starlordleggings && boots.id == ItemID.starlordboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.spidermanhelmet && chest.id == ItemID.spidermanchestplate && legs.id == ItemID.spidermanleggings && boots.id == ItemID.spidermanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.blackspidermanhelmet && chest.id == ItemID.blackspidermanchestplate && legs.id == ItemID.blackspidermanleggings && boots.id == ItemID.blackspidermanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 29, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 14, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 29, 100)
    }
    
    
    
    
    
    if (chest.id == ItemID.supermanchestplate && legs.id == ItemID.supermanleggings && boots.id == ItemID.supermanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    
    
    
    
    if (helmet.id == ItemID.hulkhelmet && chest.id == ItemID.hulkchestplate && legs.id == ItemID.hulkleggings && boots.id == ItemID.hulkboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.thorhelmet && chest.id == ItemID.thorchestplate && legs.id == ItemID.thorleggings && boots.id == ItemID.thorboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    if (helmet.id == ItemID.draxhelmet && chest.id == ItemID.draxchestplate && legs.id == ItemID.draxleggings && boots.id == ItemID.draxboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    if (helmet.id == ItemID.groothelmet && chest.id == ItemID.grootchestplate && legs.id == ItemID.grootleggings && boots.id == ItemID.grootboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 16, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.blackwidowhelmet && chest.id == ItemID.blackwidowchestplate && legs.id == ItemID.blackwidowleggings && boots.id == ItemID.blackwidowboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    
    
    
    
    
    if (helmet.id == ItemID.jonduhelmet && chest.id == ItemID.jonduchestplate && legs.id == ItemID.jonduleggings && boots.id == ItemID.jonduboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (chest.id == ItemID.doctorstrangechestplate && legs.id == ItemID.doctorstrangeleggings && boots.id == ItemID.doctorstrangeboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    if (chest.id == ItemID.quicksilverchestplate && legs.id == ItemID.quicksilverleggings && boots.id == ItemID.quicksilverboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 50, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.nebulahelmet && chest.id == ItemID.nebulachestplate && legs.id == ItemID.nebulaleggings && boots.id == ItemID.nebulaboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    
    
    if (helmet.id == ItemID.mantishelmet && chest.id == ItemID.mantischestplate && legs.id == ItemID.mantisleggings && boots.id == ItemID.mantisboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.lokihelmet && chest.id == ItemID.lokichestplate && legs.id == ItemID.lokileggings && boots.id == ItemID.lokiboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.blackpanterhelmet && chest.id == ItemID.blackpanterchestplate && legs.id == ItemID.blackpanterleggings && boots.id == ItemID.blackpanterboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    }
    
    
    
    if (helmet.id == ItemID.ghostriderhelmet && chest.id == ItemID.ghostriderchestplate && legs.id == ItemID.ghostriderleggings && boots.id == ItemID.ghostriderboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    World.setBlock(pos.x,pos.y-1,pos.z, 51, 1);
    }
    
    
    
    if (helmet.id == ItemID.deadpoolhelmet && chest.id == ItemID.deadpoolchestplate && legs.id == ItemID.deadpoolleggings && boots.id == ItemID.deadpoolboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    }
    
    
    
    if (helmet.id == ItemID.scarletwitchhelmet && chest.id == ItemID.scarletwitchchestplate && legs.id == ItemID.scarletwitchleggings && boots.id == ItemID.scarletwitchboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    if (helmet.id == ItemID.scarletwitchhelmet && chest.id == ItemID.scarletwitchchestplate && legs.id == ItemID.scarletwitchleggings && boots.id == ItemID.scarletwitchboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    



if (chest.id == ItemID.fenixchestplate && legs.id == ItemID.fenixleggings && boots.id == ItemID.fenixboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    
    
    
    if (helmet.id == ItemID.cyclopshelmet && chest.id == ItemID.cyclopschestplate && legs.id == ItemID.cyclopsleggings && boots.id == ItemID.cyclopsboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.wonderwomanhelmet && chest.id == ItemID.wonderwomanchestplate && legs.id == ItemID.wonderwomanleggings && boots.id == ItemID.wonderwomanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    }
    
    
    
    
    
    
if (chest.id == ItemID.aquamanchestplate && legs.id == ItemID.aquamanleggings && boots.id == ItemID.aquamanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 250, 100)
    }
    
    
    
    if (helmet.id == ItemID.greenlanternhelmet && chest.id == ItemID.greenlanternchestplate && legs.id == ItemID.greenlanternleggings && boots.id == ItemID.greenlanternboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    if (helmet.id == ItemID.dexstarrhelmet && chest.id == ItemID.dexstarrchestplate && legs.id == ItemID.dexstarrleggings && boots.id == ItemID.dexstarrboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    if (helmet.id == ItemID.phantomhelmet && chest.id == ItemID.phantomchestplate && legs.id == ItemID.phantomleggings && boots.id == ItemID.phantomboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    }
    
    
    
    
    
    
   
if (helmet.id == ItemID.arkshelmet && chest.id == ItemID.arkschestplate && legs.id == ItemID.arksleggings && boots.id == ItemID.arksboots) {
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.saturation, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 250, 100)

Particles.addParticle(pos.x, pos.y + 1, pos.z, 6); 

Player.setFlyingEnabled (true);
    }
    
    
    
    if (helmet.id == ItemID.acceleratorhelmet && chest.id == ItemID.acceleratorchestplate && legs.id == ItemID.acceleratorleggings && boots.id == ItemID.acceleratorboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 252, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    if (helmet.id == ItemID.flashserialhelmet && chest.id == ItemID.flashserialchestplate && legs.id == ItemID.flashserialleggings && boots.id == ItemID.flashserialboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 251, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    if (helmet.id == ItemID.ironspidermanhelmet && chest.id == ItemID.ironspidermanchestplate && legs.id == ItemID.ironspidermanleggings && boots.id == ItemID.ironspidermanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 34, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 34, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.visionhelmet && chest.id == ItemID.visionchestplate && legs.id == ItemID.visionleggings && boots.id == ItemID.visionboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    if (helmet.id == ItemID.spawnhelmet && chest.id == ItemID.spawnchestplate && legs.id == ItemID.spawnleggings && boots.id == ItemID.spawnboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
   
    








});




// file: weapons.js

importLib("ToolType","*")






IDRegistry.genItemID("capshield");
Item.createThrowableItem("capshield", "Captain America Shield", {name:"capshield"}, {stack:64});

Item.registerThrowableFunction("capshield", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 18);
} 
} 
);



IDRegistry.genItemID("energiccharge");
Item.createThrowableItem("energiccharge", "Energic Charge", {name:"energiccharge"}, {stack:64});

Item.registerThrowableFunction("energiccharge", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 18);
} 
} 
);


IDRegistry.genItemID("grappinghook");
Item.createItem("grappinghook", "Grapping hook", {name: "grappinghook", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id == ItemID.grappinghook){
        Player.setPosition(coords.relative.x, coords.relative.y+2, coords.relative.z);
    }
});





IDRegistry.genItemID("mjolnir");
Item.createItem("mjolnir", "Mjolnir", {name: "mjolnir", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("mjolnir", {durability: 3400, level: 20, efficiency: 80, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.mjolnir, "mjolnir", ToolType.sword);




IDRegistry.genItemID("stormbreaker");
Item.createItem("stormbreaker", "Storm Breaker", {name: "stormbreaker", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("stormbreaker", {durability: 3400, level: 20, efficiency: 80, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.stormbreaker, "stormbreaker", ToolType.sword);



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.mjolnir){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.stormbreaker){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});




IDRegistry.genItemID("webshooter");
Item.createItem("webshooter", "Web shooter", {name: "webshooter", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id == ItemID.webshooter){
        Player.setPosition(coords.relative.x, coords.relative.y+2, coords.relative.z);
    }
});






Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.mjolnir){
		Player.setFlyingEnabled(true); 
		}
		});
		
		
		Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.stormbreaker){
		Player.setFlyingEnabled(true); 
		}
		});
		
		
		
		
		IDRegistry.genItemID("wolverine");
Item.createItem("wolverine", "Wolverine Claws", {name: "wolverine", meta: 0}, {stack: 1});

		Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.wolverine){
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
		}
		});
		
		
		
		IDRegistry.genItemID("redenergy");
Item.createThrowableItem("redenergy", "Red Energy", {name:"redenergy"}, {stack:64});

Item.registerThrowableFunction("redenergy", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 20);
} 
} 
);



































// file: guns.js

IMPORT("ShootLib", "ShootLib");

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
	crosshairGUI:{
		bitmap:{
			name:-1,
			coords:{
				x:0,
				y:0,
				width:2048,
				height:512
			},
			size:{
				width:4000,
				height:1000
			}
		}
	}
});

ShootLib.addGun({
	id:"rocketgun",
	name:"Rocket Gun",
	ammo:"energybullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"rocketgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});









ShootLib.addGun({
	id:"kreegun",
	name:"Kree Gun",
	ammo:"energybullet",
	accuracy:4, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"kreegun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:45,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"kylngun",
	name:"Kyln Gun",
	ammo:"energybullet",
	accuracy:4, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"kylngun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:45,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"starlordgun",
	name:"Star Lord Gun",
	ammo:"energybullet",
	accuracy:6, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"starlordgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"greenarrowbow",
	name:"Green Arrow bow",
	ammo:"greenarrow",
	accuracy:7, //точность
	recoil:0, //отдача
	rate:10, //темп 
	texture:{
		name:"greenarrowbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"gun",
	name:"Gun",
	ammo:"bullet",
	accuracy:7, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"gun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:40,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addAmmos([{
	id:"energybullet",
	name:"Energy Bullet",
	texture:{
		name:"energiccharge",
		meta:0
	}
},
{
	id:"greenarrow",
	name:"Green Arrow",
	texture:{
		name:"greenarrow",
		meta:0
	}
},
{
	id:"bullet",
	name:"Bullet",
	texture:{
		name:"bullet",
		meta:0
	}
}, ]);




// file: crafts.js

Recipes.addShaped({id: ItemID.blackflint, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 318, 0, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.blackingot, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 265, 0, 'b', 351, 0]);


Recipes.addShaped({id: ItemID.greeningot, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 265, 0, 'b', 351, 2]);

Recipes.addShaped({id: ItemID.purpleleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 331, 0, 'b', 351, 13]);

Recipes.addShaped({id: ItemID.arkeniumingotsh, count: 1, data: 0}, [ "aba", "bab", "aba"], ['a', 351, 14, 'b', ItemID.krypton, 0]);

Recipes.addShaped({id: ItemID.blackleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.blackwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.blackwool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 15]);



Recipes.addShaped({id: ItemID.graywool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 7]);

Recipes.addShaped({id: ItemID.graywool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 8]);



Recipes.addShaped({id: ItemID.greenleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 10]);



Recipes.addShaped({id: ItemID.yellowleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 11]);

Recipes.addShaped({id: ItemID.blueleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 4]);



Recipes.addShaped({id: ItemID.redflint, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 318, 0, 'b', 351, 1]);

Recipes.addShaped({id: ItemID.redingot, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 265, 0, 'b', 351, 1]);

Recipes.addShaped({id: ItemID.redleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 1]);



Recipes.addShaped({id: ItemID.bluewool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 12]);

Recipes.addShaped({id: ItemID.bluewool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 3]);



Recipes.addShaped({id: ItemID.redwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 1]);

Recipes.addShaped({id: ItemID.redwool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 14]);



Recipes.addShaped({id: ItemID.violetwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 5]);

Recipes.addShaped({id: ItemID.violetwool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 10]);



Recipes.addShaped({id: ItemID.whitewool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 15]);

Recipes.addShaped({id: ItemID.whitewool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 0]);



Recipes.addShaped({id: ItemID.raccoonwool, count: 1, data: 0}, [ "ba ", "   ", "   "], ['a', 35, 0, 'b', 351, 5]);

Recipes.addShaped({id: ItemID.raccoonwool, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 35, 12]);



Recipes.addShaped({id: ItemID.yellowingot, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 265, 0, 'b', 351, 11]);



Recipes.addShaped({id: ItemID.generator, count: 1, data: 0}, [ " a ", "aba", " c "], ['a', 265, 0, 'b', 264, 0, 'c', 89, 0]);



Recipes.addShaped({id: ItemID.captainstar, count: 1, data: 0}, [ " a ", "aaa", " a "], ['a', 265, 0]);



Recipes.addShaped({id: ItemID.ironstick, count: 1, data: 0}, [ " a ", " a ", "   "], ['a', 265, 0]);



Recipes.addShaped({id: ItemID.ironstick, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', 264, 0, 'b', 351, 10]);



Recipes.addShaped({id: ItemID.greenarrow, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', 351, 2, 'b', 265, 0, 'c', 262, 0]);




Recipes.addShaped({id: ItemID.darkbluewool, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', 35, 0, 'b', 351, 12, 'c', 351, 0]);

Recipes.addShaped({id: ItemID.darkbluewool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 3, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.darkbluewool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.bluewool, 3, 'b', 351, 0]);





Recipes.addShaped({id: ItemID.darkredwool, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', 35, 0, 'b', 351, 1, 'c', 351, 0]);

Recipes.addShaped({id: ItemID.darkredwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 14, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.darkredwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.redwool, 3, 'b', 351, 0]);




Recipes.addShaped({id: ItemID.darkvioletwool, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', 35, 0, 'b', 351, 5, 'c', 351, 0]);

Recipes.addShaped({id: ItemID.darkvioletwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 10, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.darkvioletwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.violetwool, 3, 'b', 351, 0]);








































Recipes.addShaped({id: ItemID.batmanhelmet, count: 1, data: 0}, [ "aaa", "aba", "b b"], ['a', ItemID.blackingot, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.batmanchestplate, count: 1, data: 0}, [ "aba", "aaa", "aaa"], ['a', ItemID.blackingot, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.batmanleggings, count: 1, data: 0}, [ "aaa", "aba", "aba"], ['a', ItemID.blackingot, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.batmanboots, count: 1, data: 0}, [ "b b", "aba", "a a"], ['a', ItemID.blackingot, 0, 'b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.captainamericahelmet, count: 1, data: 0}, [ "aba", "a a", "aaa"], ['a', ItemID.darkbluewool, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.captainamericachestplate, count: 1, data: 0}, [ "a a", "aba", "cdc"], ['a', ItemID.darkbluewool, 0, 'b', ItemID.captainstar, 0, 'd', ItemID.redwool, 0, 'c', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.captainamericaleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.captainamericaboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.redwool, 0]);



Recipes.addShaped({id: ItemID.catwomanhelmet, count: 1, data: 0}, [ "aaa", "a a", "aaa"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.catwomanchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.catwomanleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.catwomanboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackleather, 0]);





Recipes.addShaped({id: ItemID.gamorahelmet, count: 1, data: 0}, [ "aaa", "bbb", "bbb"], ['a', ItemID.blackwool, 0, 'b', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.gamorachestplate, count: 1, data: 0}, [ "bab", "cbc", "bcb"], ['a', ItemID.greenleather, 0, 'b', ItemID.blackleather, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.gamoraleggings, count: 1, data: 0}, [ "bab", "a a", "b b"], ['a', ItemID.blackleather, 0, 'b', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.gamoraboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.blackleather, 0, 'b', ItemID.blackingot, 0]);



Recipes.addShaped({id: ItemID.gamorahelmet, count: 1, data: 0}, [ "aaa", "a a", "aaa"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.gamorachestplate, count: 1, data: 0}, [ "b b", "bbb", "bbb"], ['b', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.gamoraleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.gamoraboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.greenleather, 0]);



Recipes.addShaped({id: ItemID.hawkeyechestplate, count: 1, data: 0}, [ "a a", "bab", "cac"], ['a', ItemID.blackwool, 0, 'b', ItemID.violetwool, 0, 'c', ItemID.darkvioletwool, 0]);
Recipes.addShaped({id: ItemID.gamoraleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.gamoraboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackwool, 0]);




Recipes.addShaped({id: ItemID.ironmanhelmet, count: 1, data: 0}, [ "aba", "bbb", "aba"], ['a', ItemID.redingot, 0, 'b', ItemID.yellowingot, 0]);
Recipes.addShaped({id: ItemID.ironmanchestplate, count: 1, data: 0}, [ "aba", "bcb", "bdb"], ['a', ItemID.yellowingot, 0, 'b', ItemID.redingot, 0, 'c', ItemID.generator, 0, 'd', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.ironmanleggings, count: 1, data: 0}, [ "aaa", "b b", "a a"], ['a', ItemID.redingot, 0, 'b', ItemID.yellowingot, 0]);
Recipes.addShaped({id: ItemID.ironmanboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.redingot, 0]);



Recipes.addShaped({id: ItemID.rocketracoonhelmet, count: 1, data: 0}, [ "aaa", "a a", "aaa"], ['a', ItemID.raccoonwool, 0]);
Recipes.addShaped({id: ItemID.rocketracoonchestplate, count: 1, data: 0}, [ "aba", "aca", "cbc"], ['a', ItemID.raccoonwool, 0, 'b', ItemID.orangewool, 0, 'c', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.rocketracoonleggings, count: 1, data: 0}, [ "aaa", "b b", "b b"], ['a', ItemID.blackleather, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.rocketracoonboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.sokolhelmet, count: 1, data: 0}, [ "   ", "aba", "   "], ['a', 265, 0, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.sokolchestplate, count: 1, data: 0}, [ "aba", "cac", "aca"], ['a', ItemID.redingot, 0, 'b', 265, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.sokolleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.sokolboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackingot, 0]);




Recipes.addShaped({id: ItemID.spidermanhelmet, count: 1, data: 0}, [ "aaa", "bab", "aaa"], ['a', ItemID.redwool, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.spidermanchestplate, count: 1, data: 0}, [ "aaa", "bcb", "aaa"], ['a', ItemID.redwool, 0, 'b', ItemID.darkbluewool, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.spidermanleggings, count: 1, data: 0}, [ "bbb", "a a", "a a"], ['b', ItemID.redwool, 0, 'a', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.spidermanboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.redwool, 0]);



Recipes.addShaped({id: ItemID.starlordhelmet, count: 1, data: 0}, [ "aaa", "bab", "aaa"], ['a', 265, 0, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.starlordchestplate, count: 1, data: 0}, [ "aba", "aba", "aba"], ['a', ItemID.redleather, 0, 'b', ItemID.bluewool, 0]);
Recipes.addShaped({id: ItemID.starlordleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.starlordboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.supermanchestplate, count: 1, data: 0}, [ "aaa", "bcb", "bdb"], ['a', ItemID.krypton, 0, 'b', ItemID.darkbluewool, 0, 'c', ItemID.yellowingot, 0, 'd', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.supermanleggings, count: 1, data: 0}, [ "bwb", "b b", "b b"], ['b', ItemID.darkbluewool, 0, 'w', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.supermanboots, count: 1, data: 0}, [ "   ", "w w", "b b"], ['b', ItemID.redwool, 0, 'w', ItemID.krypton, 0]);



Recipes.addShaped({id: ItemID.blackspidermanhelmet, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.blackleather, 0, 'b', ItemID.spidermanhelmet, 0]);
Recipes.addShaped({id: ItemID.blackspidermanchestplate, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.blackleather, 0, 'b', ItemID.spidermanchestplate, 0]);
Recipes.addShaped({id: ItemID.blackspidermanleggings, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.blackleather, 0, 'b', ItemID.spidermanleggings, 0]);
Recipes.addShaped({id: ItemID.blackspidermanboots, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.blackleather, 0, 'b', ItemID.spidermanboots, 0]);



Recipes.addShaped({id: ItemID.hulkhelmet, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.hulkchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.hulkleggings, count: 1, data: 0}, [ "bbb", "a a", "a a"], ['b', ItemID.darkbluewool, 0, 'a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.hulkboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['b', ItemID.greenleather, 0]);



Recipes.addShaped({id: ItemID.thorhelmet, count: 1, data: 0}, [ "aba", "bab", "b b"], ['a', 266, 0, 'b', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.thorchestplate, count: 1, data: 0}, [ "aba", "bbc", "ccb"], ['a', 266, 0, 'b', ItemID.blackingot, 0, 'c', 334, 0]);
Recipes.addShaped({id: ItemID.thorleggings, count: 1, data: 0}, [ "bbb", "a a", "a a"], ['b', 334, 0, 'a', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.thorboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackingot, 0]);



Recipes.addShaped({id: ItemID.blackwidowchestplate, count: 1, data: 0}, [ "a a", "a a", "aaa"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.blackwidowleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.blackwidowboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.groothelmet, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', 17, 0, 'b', 89, 0]);
Recipes.addShaped({id: ItemID.grootchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', 17, 0]);
Recipes.addShaped({id: ItemID.grootleggings, count: 1, data: 0}, [ "aa", "a a", "a a"], ['a', 17, 0]);
Recipes.addShaped({id: ItemID.grootboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', 17, 0]);



Recipes.addShaped({id: ItemID.draxhelmet, count: 1, data: 0}, [ "aba", "aba", "bbb"], ['a', ItemID.redleather, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.draxchestplate, count: 1, data: 0}, [ "aab", "aba", "baa"], ['a', ItemID.redleather, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.draxleggings, count: 1, data: 0}, [ "bbb", "a a", "a a"], ['b', ItemID.redleather, 0, 'a', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.draxboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackingot, 0]);








Recipes.addShaped({id: ItemID.quicksilverchestplate, count: 1, data: 0}, [ "aba", "cbc", "bbb"], ['a', ItemID.darkbluewool, 0, 'b', ItemID.graywool, 0, 'c', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.quicksilverleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.quicksilverboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.graywool, 0, 'b', ItemID.whitewool, 0]);












Recipes.addShaped({id: ItemID.doctorstrangechestplate, count: 1, data: 0}, [ "aba", "ccc", "ccc"], ['a', 266, 0, 'b', ItemID.redwool, 0, 'c', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.doctorstrangeleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.doctorstrangeboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackwool, 0]);






Recipes.addShaped({id: ItemID.jonduhelmet, count: 1, data: 0}, [ "aba", "aaa", "aaa"], ['b', ItemID.redingot, 0, 'a', ItemID.blueleather, 0]);
Recipes.addShaped({id: ItemID.jonduchestplate, count: 1, data: 0}, [ "aba", "aba", "aba"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.jonduleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.jonduboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackleather, 0]);






Recipes.addShaped({id: ItemID.nebulahelmet, count: 1, data: 0}, [ "aaa", "aab", "aaa"], ['a', ItemID.blueleather, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.nebulachestplate, count: 1, data: 0}, [ "aba", "aba", "bbb"], ['a', ItemID.blueleather, 0, 'b', ItemID.redleather, 0]);
Recipes.addShaped({id: ItemID.nebulaleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.redleather, 0]);
Recipes.addShaped({id: ItemID.nebulaboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.redleather, 0]);






Recipes.addShaped({id: ItemID.mantishelmet, count: 1, data: 0}, [ "aaa", "bbb", "bbb"], ['a', ItemID.blackwool, 0, 'b', ItemID.yellowleather, 0]);
Recipes.addShaped({id: ItemID.mantischestplate, count: 1, data: 0}, [ "aba", "aba", "bbb"], ['a', ItemID.yellowleather, 0, 'b', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.mantisleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.mantisboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.greenleather, 0]);






Recipes.addShaped({id: ItemID.lokihelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', 266, 0]);
Recipes.addShaped({id: ItemID.lokichestplate, count: 1, data: 0}, [ "bab", "cbc", "aaa"], ['a', 266, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.lokileggings, count: 1, data: 0}, [ "bbb", "a a", "b b"], ['b', ItemID.blackwool, 0, 'a', 266, 0]);
Recipes.addShaped({id: ItemID.lokiboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['b', ItemID.blackwool, 0, 'a', 266, 0]);




Recipes.addShaped({id: ItemID.blackpanterhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.vibranium, 0]);
Recipes.addShaped({id: ItemID.blackpanterchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.vibranium, 0]);
Recipes.addShaped({id: ItemID.blackpanterleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.vibranium, 0]);
Recipes.addShaped({id: ItemID.blackpanterboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.vibranium, 0]);



Recipes.addShaped({id: ItemID.ghostriderhelmet, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', 385, 0, 'b', 87, 0, 'c', 397, 0]);
Recipes.addShaped({id: ItemID.ghostriderchestplate, count: 1, data: 0}, [ "aba", "cbc", "cbc"], ['a', 265, 0, 'b', ItemID.graywool, 0, 'c', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.ghostriderleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackleather, 0, 'a', 266, 0]);
Recipes.addShaped({id: ItemID.ghostriderboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.deadpoolhelmet, count: 1, data: 0}, [ "bab", "bab", "aaa"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.deadpoolchestplate, count: 1, data: 0}, [ "aaa", "aba", "aba"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.deadpoolleggings, count: 1, data: 0}, [ "bab", "a a", "a a"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.deadpoolboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);





Recipes.addShaped({id: ItemID.capshield, count: 64, data: 0}, [ " a ", "bcb", " a "], ['a', ItemID.redingot, 0, 'b', 265, 0, 'c', ItemID.vibranium, 0]);



Recipes.addShaped({id: ItemID.energiccharge, count: 64, data: 0}, [ " a ", "aba", " a "], ['a', 331, 0, 'b', 152, 0]);


Recipes.addShaped({id: ItemID.redenergy, count: 64, data: 0}, [ " a ", "aba", " a "], ['a', 331, 0, 'b', 152, 0]);




Recipes.addShaped({id: ItemID.scarletwitchchestplate, count: 1, data: 0}, [ "aba", "aba", "aba"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.scarletwitchleggings, count: 1, data: 0}, [ "aaa", "aaa", "   "], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.scarletwitchboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.beasthelmet, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.beastchestplate, count: 1, data: 0}, [ "aba", "aba", "aba"], ['a', ItemID.blackleather, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.beastleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.beastboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackleather, 0]);





Recipes.addShaped({id: ItemID.wonderwomanhelmet, count: 1, data: 0}, [ "   ", "aaa", " a "], ['a', 266, 0]);
Recipes.addShaped({id: ItemID.wonderwomanchestplate, count: 1, data: 0}, [ "aaa", "bab", "bbb"], ['a', 266, 0, 'b', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.wonderwomanleggings, count: 1, data: 0}, [ "bbb", "aba", " a "], ['a', 266, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.wonderwomanboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.blackleather, 0, 'b', ItemID.redingot, 0]);







Recipes.addShaped({id: ItemID.fenixchestplate, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.redleather, 0, 'b', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.fenixleggings, count: 1, data: 0}, [ "aba", "a a", "a a"], ['a', ItemID.redleather, 0, 'b', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.fenixboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.redleather, 0, 'b', ItemID.krypton, 0]);






Recipes.addShaped({id: ItemID.cyclopshelmet, count: 1, data: 0}, [ "   ", "aaa", "   "], ['a', 265, 0]);
Recipes.addShaped({id: ItemID.cyclopschestplate, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', ItemID.blackleather, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.cyclopsleggings, count: 1, data: 0}, [ "aba", "b b", "a a"], ['a', ItemID.blackleather, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.cyclopsboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.blackleather, 0, 'b', 265, 0]);







Recipes.addShaped({id: ItemID.aquamanchestplate, count: 1, data: 0}, [ "aaa", "bab", "aaa"], ['a', 266, 0, 'b', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.aquamanleggings, count: 1, data: 0}, [ "aaa", "b b", "a a"], ['a', ItemID.greeningot, 0, 'b', 266, 0]);
Recipes.addShaped({id: ItemID.aquamanboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', 266, 0]);






Recipes.addShaped({id: ItemID.greenlanternhelmet, count: 1, data: 0}, [ "   ", "aaa", "   "], ['a', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.greenlanternchestplate, count: 1, data: 0}, [ "aaa", "bcb", "bab"], ['a', ItemID.greeningot, 0, 'b', ItemID.blackingot, 0, 'c', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.greenlanternleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.greenlanternboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackingot, 0]);






Recipes.addShaped({id: ItemID.dexstarrhelmet, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.graywool, 0]);
Recipes.addShaped({id: ItemID.dexstarrchestplate, count: 1, data: 0}, [ "aaa", "bcb", "bbb"], ['a', ItemID.redingot, 0, 'b', ItemID.redingot, 0, 'c', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.dexstarrleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.dexstarrboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.whitewool, 0, 'b', ItemID.redingot, 0]);






Recipes.addShaped({id: ItemID.phantomhelmet, count: 1, data: 0}, [ "aaa", "bcb", "aaa"], ['a', ItemID.purpleleather, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.phantomchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.purpleleather, 0]);
Recipes.addShaped({id: ItemID.phantomleggings, count: 1, data: 0}, [ "aba", "c c", "c c"], ['a', ItemID.blackleather, 0, 'b', 266, 0, 'c', ItemID.purpleleather, 0]);
Recipes.addShaped({id: ItemID.phantomboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.acceleratorhelmet, count: 1, data: 0}, [ "rbr", "bbb", "r r"], ['b', ItemID.darkbluewool, 0, 'r', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.acceleratorchestplate, count: 1, data: 0}, [ "yby", "byb", "rbr"], ['y', ItemID.yellowleather, 0, 'b', ItemID.darkbluewool, 0, 'r', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.acceleratorleggings, count: 1, data: 0}, [ "yby", "r r", "b b"], ['y', ItemID.yellowleather, 0, 'b', ItemID.darkbluewool, 0, 'r', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.acceleratorboots, count: 1, data: 0}, [ "   ", "b b", "r r"], ['b', ItemID.darkbluewool, 0, 'r', ItemID.redwool, 0]);


Recipes.addShaped({id: ItemID.arkshelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.arkeniumingotsh, 0]);
Recipes.addShaped({id: ItemID.arkschestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.arkeniumingotsh, 0]);
Recipes.addShaped({id: ItemID.arksleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.arkeniumingotsh, 0]);
Recipes.addShaped({id: ItemID.arksboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.arkeniumingotsh, 0]);
















Recipes.addShaped({id: ItemID.ironspidermanhelmet, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.redingot, 0, 'b', ItemID.spidermanhelmet, 0]);
Recipes.addShaped({id: ItemID.ironspidermanchestplate, count: 1, data: 0}, [ "gig", "rcr", "drd"], ['g', 266, 0, 'i', 265, 0, 'r', ItemID.redingot, 0, 'c', ItemID.spidermanchestplate, 0, 'd', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.ironspidermanleggings, count: 1, data: 0}, [ "bbb", "blb", "b b"], ['b', ItemID.darkbluewool, 0, 'l', ItemID.spidermanleggings, 0]);
Recipes.addShaped({id: ItemID.ironspidermanboots, count: 1, data: 0}, [ "g g", "ibi", "rrr"], ['g', 266, 0, 'i', 265, 0, 'b', ItemID.spidermanboots, 0, 'r', ItemID.redingot, 0]);



Recipes.addShaped({id: ItemID.visionhelmet, count: 1, data: 0}, [ "ggg", "rkr", "grg"], ['g', ItemID.greeningot, 0, 'r', ItemID.redingot, 0, 'k', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.visionchestplate, count: 1, data: 0}, [ "ryr", "gkg", "gkg"], ['y', ItemID.yellowingot, 0, 'r', ItemID.redingot, 0, 'g', ItemID.greeningot, 0, 'k', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.visionleggings, count: 1, data: 0}, [ "ggg", "gkg", "g g"], ['g', ItemID.greeningot, 0, 'k', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.visionboots, count: 1, data: 0}, [ "   ", "yky", "r r"], ['y', ItemID.yellowingot, 0, 'r', ItemID.redingot, 0, 'k', ItemID.krypton, 0]);



Recipes.addShaped({id: ItemID.flashserialhelmet, count: 1, data: 0}, [ "lil", "ili", "lil"], ['l', ItemID.redleather, 0, 'i', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.flashserialchestplate, count: 1, data: 0}, [ "lil", "iyi", "lil"], ['y', ItemID.yellowingot, 0, 'l', ItemID.redleather, 0, 'i', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.flashserialleggings, count: 1, data: 0}, [ "lyi", "i i", "l l"], ['y', ItemID.yellowingot, 0, 'l', ItemID.redleather, 0, 'i', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.flashserialboots, count: 1, data: 0}, [ "   ", "i i", "l l"], ['l', ItemID.redleather, 0, 'i', ItemID.redingot, 0]);



Recipes.addShaped({id: ItemID.spawnhelmet, count: 1, data: 0}, [ "wbw", "gwg", "www"], ['w', ItemID.whitewool, 0, 'b', ItemID.blackleather, 0, 'g', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.spawnchestplate, count: 1, data: 0}, [ "rir", "wbw", "bbb"], ['r', ItemID.redwool, 0, 'i', 265, 0, 'w', ItemID.whitewool, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.spawnleggings, count: 1, data: 0}, [ "bbb", "r r", "b b"], ['r', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.spawnboots, count: 1, data: 0}, [ "   ", "b b", "r r"], ['r', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);












































