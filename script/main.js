var BlockIds = {
	Vanilla: {Stone: 1, Granite: 1, PolishedGranite: 1, Diorite: 1, PolishedDiorite: 1, Andesite: 1, PolishedAndesite: 1, Grass: 2, Dirt: 3, Cobblestone: 4, OakPlanks: 5, SprucePlanks: 5, BirchPlanks: 5, JunglePlanks: 5, AcaciaPlanks: 5, DarkOakPlanks: 5, OakSapling: 6, SpruceSapling: 6, BirchSapling: 6, JungleSapling: 6, AcaciaSapling: 6, DarkOakSapling: 6, Bedrock: 7, StillWater: 8, FlowingWater: 9, StillLava: 10, FlowingLava: 11, Sand: 12, RedSand: 12, Gravel: 13, GoldOre: 14, IronOre: 15, CoalOre: 16},
	Modded: {CrushedIronBlock: 200, CrushedGoldBlock: 201, OakSifter: 202, SpruceSifter: 202, BirchSifter: 202, JungleSifter: 202, AcaciaSifter: 202, DarkOakSifter: 202}
};
var BlockDatas = {
	Vanilla: {Granite: 1, PolishedGranite: 2},
	Modded: {SpruceSifter: 1, BirchSifter: 2, JungleSifter: 3, AcaciaSifter: 4, DarkOakSifter: 5}
};
var ItemIds = {
	Vanilla: {},
	Modded: {CrushedCoal: 550, TinyCrushedCoal: 551, CrushedIron: 552, TinyCrushedIron: 553, CrushedGold: 554, TinyCrushedGold: 555, Rock: 556, PortableCrafter: 557}
};
var ItemDatas = {
	Vanilla: {},
};

Item.defineItem = function(par1int, par2string, par3int, par4string, par5int, par6boolean){
	ModPE.setItem(par1int, par2string, par3int, par4string, par5int);
	if(par6boolean == true){
		Item.setCategory(par1int, ItemCategory.FOOD);
		Player.addItemCreativeInv(par1int, 1, 0);
	}
};
//Item.defineItem(id, texture, textureData, name, maxStackSize, addCreative);
Item.defineToolItem = function(par1int, par2string, par3int, par4string, par5int, par6int, par7boolean){
	ModPE.setItem(par1int, par2string, par3int, par4string, par5int);
	Item.setMaxDamage(par1int, par6int);
	Item.setHandEquipped( par1int, true);
	if(par7boolean == true){
		Item.setCategory(par1int, ItemCategory.TOOL);
		Player.addItemCreativeInv(par1int, 1, 0);
	}
};
//Item.defineToolItem(id, texture, textureData, name, maxStackSize, durability, addCreative);

//Coal
Item.defineItem(ItemIds.Modded.CrushedCoal, "crushed_coal", 0, "Crushed Coal", 64, true);
Item.defineItem(ItemIds.Modded.TinyCrushedCoal, "tiny_crushed_coal", 0, "Tiny Crushed Coal", 64, true);
//Iron
Item.defineItem(ItemIds.Modded.CrushedIron, "crushed_iron", 0, "Crushed Iron", 64, true);
Item.defineItem(ItemIds.Modded.TinyCrushedIron, "tiny_crushed_iron", 0, "Tiny Crushed Iron", 64, true);
//Gold
Item.defineItem(ItemIds.Modded.CrushedGold, "crushed_gold", 0, "Crushed Gold", 64, true);
Item.defineItem(ItemIds.Modded.TinyCrushedGold, "tiny_crushed_gold", 0, "Tiny Crushed Gold", 64, true);
