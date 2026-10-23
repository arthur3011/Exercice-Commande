const nom_du_client = ("Awa")
const nom_du_produit = ("Ordinateur")
const prix_unitaire = 250000
const quantite = 2
const frais_de_livraison = 5000
const taux_de_tva = 0
const montant_des_produits = prix_unitaire*quantite
const tva = (18*montant_des_produits)/100
const montant_ttc = montant_des_produits+tva
const total_a_payer = montant_ttc+frais_de_livraison
console.log("===== REÇU DE COMMANDE =====")
console.log("Client : ", nom_du_client)
console.log("Produit : ", nom_du_produit)
console.log("Prix unitaire : ", prix_unitaire, "FCFA")
console.log("Qantité : ", quantite)
console.log(" ")
console.log("Montant des produits : ",prix_unitaire*quantite, "FCFA")
console.log("TVA (18%) : ", (18*montant_des_produits)/100, "FCFA")
console.log("Montant TTC : ",montant_des_produits+tva, "FCFA")
console.log("Livraison : ",frais_de_livraison, "FCFA")
console.log("TOTAL A PAYER : ", montant_ttc+frais_de_livraison, "FCFA")
console.log(" ")
console.log("Prix moyen TTC par produit : ",montant_ttc/quantite, "FCFA")
console.log("Type du nom : ", typeof nom_du_client)
console.log("Type du prix : ", typeof total_a_payer)
console.log("Type de la quantité : ", typeof quantite)
console.log(" ")
console.log("Remise fixe de 10000 FCFA ")
console.log("Prix total avec remise fixe de 10000 FCFA : ", total_a_payer-10000, "FCFA")