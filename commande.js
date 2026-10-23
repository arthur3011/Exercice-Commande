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