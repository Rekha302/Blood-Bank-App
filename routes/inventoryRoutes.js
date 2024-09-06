const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrganisationForHospitalController, getOrganisationController, getInventoryHospitalController } = require('../controllers/inventoryController')

const router =express.Router()
//ROUTES
//ADD INVENTORY ||POST
router.post('/create-inventory',authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get('/get-inventory',authMiddleware,getInventoryController)

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/get-donars",authMiddleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals",authMiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-organisation",authMiddleware, getOrganisationController);

//GET orgnaisation RECORDS
router.get("/get-organisation-for-hospital",authMiddleware, getOrganisationForHospitalController);


module.exports = router