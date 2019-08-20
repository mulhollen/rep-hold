
let sku;

export function skuMaker(OptionsDict) {
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("3-x-8") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS3X8";
    
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("6-x-6") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS6X6";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("5-x-8") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS5X8";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("6-x-24") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS6X24";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("12-x-18") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS12X18";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("18-x-24") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS18X24";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("18-x-27") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS18X27";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("24-x-36") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS24X36";


    // Acrylic - Clear (No Holes)
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("4-x-6") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS4X6";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("5-x-7") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS5X7";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("8-x-10") && OptionsDict["Holes"].includes("No Mount")) sku = "WTAS8X10";

    // Acrylic - Clear (With Holes)
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("3-x-8") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS3X8H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("6-x-6") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS6X6H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("5-x-8") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS5X8H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("6-x-24") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS6X24H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("12-x-18") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS12X18H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("18-x-24") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS18X24H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("18-x-27") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS18X27H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("24X36") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS24X36H";


    // Acrylic - Clear (With Holes)
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("4-x-6") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS4X6H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("5-x-7") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS5X7H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Clear Acrylic") && OptionsDict["Size"].includes("8-x-10") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WTAS8X10H";


    // Acrylic - Frosted (No Holes)
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("3-x-8") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF38";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("6-x-6") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF66";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("5-x-8") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF58";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("6-x-24") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF624";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("12-x-18") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF1218";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("18-x-24") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF1824";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("18-x-27") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF1827";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("24-x-36") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF1824";

    
    // Acrylic - Frosted (No Holes)
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("4-x-6") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF46";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("5-x-7") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF57";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("8-x-10") && OptionsDict["Holes"].includes("No Mount")) sku = "WFASSF810";


    // Acrylic - Frosted (With Holes)
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("3-x-8") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF38H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("6-x-6") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF66H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("5-x-8") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF58H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("6-x-24") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF624H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("12-x-18") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF1218H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("18-x-24") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF1824H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("18-x-27") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF1827H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("24-x-36") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF2436H";


    // Acrylic - Fronsted (With Holes)
    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("4-x-6") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF46H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("5-x-7") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF57H";

    if (OptionsDict["Substrate"].includes("Acrylic") && OptionsDict["Finish"].includes("Frosted Acrylic") && OptionsDict["Size"].includes("8-x-10") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WFASSF810H";


    /*** ALL METAL  ***/

    // Metal - Brushed (No Holes)
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("3-x-8") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM3X8";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("6-x-6") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM6X6";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("5-x-8") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM5X8";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("6-x-24") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM6X24";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("12-x-18") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM12X18";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("18-x-24") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM18X24";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("18-x-27") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM18X27";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("24-x-36") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM24X36";


    // Metal - Brushed (No Holes)
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("4-x-6") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM4X6";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("5-x-7") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM5X7";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("8-x-10") && OptionsDict["Holes"].includes("No Mount")) sku = "WBRM8X10";


    // Metal - Brushed (With Holes)
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("3-x-8") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM3X8H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("6-x-6") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM6X6H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("5-x-8") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM5X8H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("6-x-24") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM6X24H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("12-x-18") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM12X18H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("18-x-24") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM18X24H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("18-x-27") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM18X27H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("24-x-36") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM24X36H";

    // Metal - Brushed (With Holes)
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("4-x-6") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM4X6H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("5-x-7") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM5X7H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("Brushed Metal") && OptionsDict["Size"].includes("8-x-10") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WBRM8X10H";


    // Metal - White (No Holes)
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("3-x-8") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM3X8";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("6-x-6") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM6X6";
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("5-x-8") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM5X8";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("6-x-24") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM6X24";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("12-x-18") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM12X18";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("18-x-24") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM18X24";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("18-x-27") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM18X27";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("24-x-36") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM24X36";

    // Metal - White (No Holes)
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("4-x-6") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM4X6";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("5-x-7") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM5X7";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("8-x-10") && OptionsDict["Holes"].includes("No Mount")) sku = "WWCM8X10";


    // Metal - White (With Holes)
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("3-x-8") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM3X8H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("6-x-6") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM6X6H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("5-x-8") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM5X8H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("6-x-24") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM6X24H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("12-x-18") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM12X18H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("18-x-24") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM18X24H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("18-x-27") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM18X27H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("24-x-36") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM24X36H";

    // Metal - White (With Holes)
    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("4-x-6") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM4X6H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("5-x-7") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM5X7H";

    if (OptionsDict["Substrate"].includes("Metal") && OptionsDict["Finish"].includes("White Metal") && OptionsDict["Size"].includes("8-x-10") && OptionsDict["Holes"].includes("Stand Offs")) sku = "WWCM8X10H";

    return sku

}