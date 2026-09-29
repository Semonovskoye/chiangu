# Topic references support principles; original document keys are separately preserved.
BASE='https://openstax.org/books/biology-2e/pages/'
REFS={}
def O(k,title,path):REFS[k]=(f'OpenStax Biology 2e · {title}',BASE+path)
O('metabolism','Energy and metabolism','6-1-energy-and-metabolism')
O('photosynthesis','Overview of photosynthesis','8-1-overview-of-photosynthesis')
O('ecology','Energy flow through ecosystems','46-2-energy-flow-through-ecosystems')
O('transport','Transport of water and solutes in plants','30-5-transport-of-water-and-solutes-in-plants')
O('minerals','Nutritional requirements of plants','31-1-nutritional-requirements-of-plants')
O('stems','Stems and secondary growth','30-2-stems')
O('water','Water','2-2-water')
O('nitrogen','Nutritional adaptations of plants','31-3-nutritional-adaptations-of-plants')
O('membrane','Passive transport','5-2-passive-transport')
O('leaves','Leaves','30-4-leaves')
O('c4','C₃, C₄ and CAM','8-3-using-light-energy-to-make-organic-molecules')
O('light','Light-dependent reactions','8-2-the-light-dependent-reactions-of-photosynthesis')
O('calvin','Calvin cycle','8-3-using-light-energy-to-make-organic-molecules')
O('glycolysis','Glycolysis','7-2-glycolysis')
O('krebs','Pyruvate oxidation and citric acid cycle','7-3-oxidation-of-pyruvate-and-the-citric-acid-cycle')
O('oxidation','Oxidative phosphorylation and variable yield','7-4-oxidative-phosphorylation')
O('fermentation','Metabolism without oxygen','7-5-metabolism-without-oxygen')
O('respiration','Energy and metabolism','6-1-energy-and-metabolism')
O('soil','The soil','31-2-the-soil')
O('roots','Roots and endodermal barriers','30-3-roots')
O('casparian','Casparian strip and transport','30-5-transport-of-water-and-solutes-in-plants')
REFS.update({
 'earth':('USGS · How much water is there on Earth?','https://www.usgs.gov/water-science-school/science/how-much-water-there-earth'),
 'nitrogenase':('OpenStax · Beneficial prokaryotes: oxygen-sensitive nitrogenase','https://openstax.org/books/biology/pages/22-5-beneficial-prokaryotes'),
 'mulch':('University of Minnesota Extension · Straw mulch and winter protection','https://extension.umn.edu/agriculture/specialty-crops/commercial-fruit-production/strawberry-farming/adding-and-removing-straw-mulch-for-strawberries'),
 'photoresp':('de Veau & Burris (1989) · Photorespiratory rates in wheat and maize','https://pubmed.ncbi.nlm.nih.gov/16666799/'),
 'atpyield':('Pearson · ATP yield: modern and traditional P/O conventions','https://www.pearson.com/channels/calculators/atp-cellular-respiration-calculator'),
 'limewater':('Royal Society of Chemistry · Calcium carbonate and the limewater test','https://edu.rsc.org/experiments/thermal-decomposition-of-calcium-carbonate/704.article'),
 'salinity-research':('Osmotic and hydraulic adjustment of mangrove saplings to extreme salinity (2016)','https://pubmed.ncbi.nlm.nih.gov/27591440/'),
 'cutflowers':('Iowa State Extension · Harvesting, conditioning and caring for cut flowers','https://yardandgarden.extension.iastate.edu/how-to/how-harvest-condition-and-care-cut-flowers'),
 'salt-extension':('University of Maryland Extension · Watering plants and leaching soluble salts','https://extension.umd.edu/resource/watering-indoor-plants'),
 'root-volume':('Poorter et al. (2012) · Pot size matters: meta-analysis of rooting volume','https://pubmed.ncbi.nlm.nih.gov/32480834/'),
 'treecare':('Purdue Extension · Pruning ornamental trees and shrubs; wound dressings','https://ag.purdue.edu/department/hla/extension/extension-publications-library/ext-pubs/ho-4-w.html'),
 'rice':('IRRI · Seedling preparation and transplanting shock','https://www.knowledgebank.irri.org/step-by-step-production/growth/planting/how-to-prepare-the-seedlings-for-transplanting'),
 'cam-pineapple':('Ming et al. (2015) · Pineapple genome and CAM photosynthesis','https://www.nature.com/articles/ng.3435'),
 'c4-crop':('Burgess et al. (2024) · C₃ rice and C₄ sorghum cell-identity networks','https://www.nature.com/articles/s41586-024-08204-3'),
})
