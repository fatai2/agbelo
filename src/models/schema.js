export const schema = {
    "models": {
        "Post": {
            "name": "Post",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "postContent": {
                    "name": "postContent",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "translations": {
                    "name": "translations",
                    "isArray": true,
                    "type": {
                        "model": "Translation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "post"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Posts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "versioned",
                    "properties": {}
                }
            ]
        },
        "Translation": {
            "name": "Translation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "translationIvie": {
                    "name": "translationIvie",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "exampleIvie": {
                    "name": "exampleIvie",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "exampleEnglish": {
                    "name": "exampleEnglish",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "post": {
                    "name": "post",
                    "isArray": false,
                    "type": {
                        "model": "Post"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "postId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Translations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "versioned",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "translationsByPostId",
                        "fields": [
                            "postId"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "3253de5c38cc875b38b5ec08d9a29d54"
};