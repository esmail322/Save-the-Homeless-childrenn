/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ze0aqea02d1wtnr",
    "created": "2023-10-25 11:23:55.992Z",
    "updated": "2023-10-25 11:23:55.992Z",
    "name": "Donar",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hknbjyao",
        "name": "Full_name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "f5tipptc",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "p53djltf",
        "name": "password",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ze0aqea02d1wtnr");

  return dao.deleteCollection(collection);
})
