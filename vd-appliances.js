define({ "api": [
  {
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Internal Error.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./versa-rest/vd_appliances_management.js",
    "group": "/home/akshay/Work/vnms_20.2/vnms-main/cdb-adaptor/src/main/resources/yangs/versa-rest/vd_appliances_management.js",
    "groupTitle": "/home/akshay/Work/vnms_20.2/vnms-main/cdb-adaptor/src/main/resources/yangs/versa-rest/vd_appliances_management.js",
    "name": ""
  },
  {
    "type": "POST",
    "url": "/api/config/nms/provider/config-save/files",
    "title": "Create file object",
    "version": "20.2.0",
    "name": "createFile",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"file\": {\n  \"file-name\": \"string-1\",\n  \"device-name\": \"string-4\",\n  \"size\": \"500\",\n  \"creation-time\": \"2014-10-17T14:00:00-05:00\"\n }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "Status: 201 Created",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "DELETE",
    "url": "/api/config/nms/provider/config-save/files/file/<FILE-NAME>",
    "title": "Delete file object",
    "version": "20.2.0",
    "name": "deleteFile",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file-name",
            "description": "<p>file-name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "NA",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "Status: 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "PUT",
    "url": "/api/config/nms/provider",
    "title": "Edit configuration for enable/disable appliance subjugation",
    "version": "20.2.0",
    "name": "editApplianceSubjugate",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"appliance-subjugate\": {\n  \"enable\": \"true\"\n }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "Status: 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "PUT",
    "url": "/api/config/nms/provider/config-save/files/file/<FILE-NAME>",
    "title": "Edit file object",
    "version": "20.2.0",
    "name": "editFile",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file-name",
            "description": "<p>file-name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"file\": {\n  \"file-name\": \"string-1\",\n  \"device-name\": \"string-4\",\n  \"size\": \"500\",\n  \"creation-time\": \"2014-10-17T14:00:00-05:00\"\n }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "Status: 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "get",
    "url": "/vnms/cloud/systems/getAllApplianceNames",
    "title": "get Appliance Name and Uuid",
    "name": "getAllApplianceNames",
    "group": "VD_Appliances_Management",
    "version": "20.2.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n {\n\t\t\"appliance-list\": [\n\t\t {\n\t\t\t\"name\": \"Branch-Alibaba-PreStageTest\",\n\t\t\t\"uuid\": \"dd6ded7b-2666-4a76-9893-a5d823c2d687\"\n\t\t\t\"branchId\": 116\n\t\t},\n\t\t{\n\t\t\t\"name\": \"Controller-Versa\",\n\t        \"uuid\": \"f2686a91-fb9c-4a58-8fef-2a757ec99b11\",\n\t         \"branchId\": 1\n\t    },\n\t    {\n\t        \"name\": \"Branch-Facebook\",\n\t        \"uuid\": \"f0300924-e15d-4417-a3a9-fa2819a649ce\",\n\t        \"branchId\": 108\n\t     }\n\t  ]\n\t  }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "get",
    "url": "/vnms/cloud/systems/getAllAppliancesBasicDetails?offset={offset}&limit={limit}",
    "title": "get Appliance Basic details",
    "name": "getAllAppliancesBasicDetails",
    "group": "VD_Appliances_Management",
    "version": "20.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>page offset value</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>page limit value</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n\n {\n\t\t\"appliance-list\": [\n\t\t{\n\t\t\t\"name\": \"Branch-Alibaba-PreStageTest\",\n\t\t\t\"uuid\": \"dd6ded7b-2666-4a76-9893-a5d823c2d687\",\n\t\t\t\"ipAddress\": \"10.10.64.116\",\n\t\t\t\"appType\": \"branch\",\n\t\t\t\"branchId\": 116\n\t\t},\n\t\t{\n\t\t\t\"name\": \"Controller-Versa\",\n\t\t\t\"uuid\": \"f2686a91-fb9c-4a58-8fef-2a757ec99b11\",\n\t\t\t\"ipAddress\": \"10.192.111.34\",\n\t\t\t\"appType\": \"controller\",\n\t\t\t\"branchId\": 1\n\t\t},\n\t\t{\n\t\t\t\"name\": \"Branch-Facebook\",\n\t\t\t\"uuid\": \"f0300924-e15d-4417-a3a9-fa2819a649ce\",\n\t\t\t\"ipAddress\": \"10.20.64.108\",\n\t\t\t\"appType\": \"branch\",\n\t\t\t\"branchId\": 108\n\t    }\n\t  ]\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "get",
    "url": "/vnms/cloud/systems/getApplianceByUUID/{applianceUuid}",
    "title": "get Appliance By Uuid",
    "name": "getApplianceByUUID",
    "group": "VD_Appliances_Management",
    "version": "20.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applianceUuid",
            "description": "<p>uuid of appliance</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200\n{\n    \"applianceMo\": {\n        \"vmid\": null,\n        \"cmsorg\": null,\n        \"providerOrg\": {\n            \"id\": null,\n            \"provider\": true,\n            \"analyticsEnabled\": true,\n            \"primary\": false,\n            \"solution_tier\": \"NGFW\",\n            \"bandwidth\": 50,\n            \"tenant_subscription_state\": \"activated\",\n            \"is_analytics_enabled\": true,\n            \"is_primary\": false,\n            \"applianceuuid\": \"2225f707-6183-48be-8c13-c96368b0e3ed\",\n            \"orguuid\": \"9ce77b56-7ab6-4d9d-b460-bb4668e64be9\",\n            \"customParams\": [],\n            \"services\": null,\n            \"availableRoutingInstances\": null,\n            \"availableProviderOrgs\": null,\n            \"availableServiceNodeGroups\": [\n                \"Default_All_Services\"\n            ],\n            \"createdAt\": 1564653175484,\n            \"updatedAt\": 1564743818701,\n            \"suspendedAt\": 1564653175484,\n            \"terminatedAt\": 1564653175484,\n            \"rmaedAt\": null,\n            \"appliance\": null,\n            \"applianceOrgNetworkConn\": [\n                {\n                    \"id\": null,\n                    \"appliance\": null,\n                    \"uuid\": null,\n                    \"applianceUuid\": null,\n                    \"org_uuid\": \"9ce77b56-7ab6-4d9d-b460-bb4668e64be9\",\n                    \"slot\": 0,\n                    \"index\": 2,\n                    \"subunit\": 12,\n                    \"parentInterface\": \"none\",\n                    \"ipv4Address\": [\n                        \"10.192.158.72/16\"\n                    ],\n                    \"ipv6Address\": null,\n                    \"gateway\": null,\n                    \"isconnected\": false,\n                    \"ipAddressAllocationMode\": \"manual\",\n                    \"ipAddressAllocationModev6\": \"manual\",\n                    \"network\": \"locOrg\",\n                    \"parentNetwork\": null,\n                    \"connectedExternalNetwork\": null,\n                    \"networkType\": \"data-external\",\n                    \"vlan\": 12,\n                    \"routingInstance\": null\n                }\n            ],\n            \"organizationCustomParams\": null\n        },\n        \"name\": \"YearBasedApp\",\n        \"uuid\": \"2225f707-6183-48be-8c13-c96368b0e3ed\",\n        \"ipAddress\": \"10.192.158.72\",\n        \"appType\": \"branch\",\n        \"appSubType\": null,\n        \"ztpStage\": null,\n        \"stagingController\": false,\n        \"postStagingController\": false,\n        \"syncFromNeeded\": false,\n        \"controllerList\": null,\n        \"appId\": 0,\n        \"userLabel\": \"YearBasedApp\",\n        \"createdAt\": \"2019-08-01 09:52:55\",\n        \"createdBy\": null,\n        \"creationStatus\": false,\n        \"trafficMode\": null,\n        \"branchId\": 0,\n        \"wanIpList\": null,\n        \"flavor\": null,\n        \"sng\": null,\n        \"services\": null,\n        \"dataExternalNetworks\": null,\n        \"vappid\": null,\n        \"securityGroup\": null,\n        \"maxVsns\": 0,\n        \"cmsOrg\": \"66d7670e-a8c3-4196-8dda-cae59bf10051\",\n        \"cmsConnector\": \"local\",\n        \"nodes\": [\n            {\n                \"id\": null,\n                \"appliance\": null,\n                \"uuid\": \"2225f707-6183-48be-8c13-c96368b0e3ed\",\n                \"slot\": 0,\n                \"region\": null,\n                \"vmid\": null,\n                \"createSource\": null,\n                \"availabilityZone\": null\n            }\n        ],\n        \"ucpeNodes\": null,\n        \"associatedOrgs\": [\n            {\n                \"id\": null,\n                \"provider\": true,\n                \"analyticsEnabled\": true,\n                \"primary\": false,\n                \"solution_tier\": \"NGFW\",\n                \"bandwidth\": 50,\n                \"tenant_subscription_state\": \"activated\",\n                \"is_analytics_enabled\": true,\n                \"is_primary\": false,\n                \"applianceuuid\": \"2225f707-6183-48be-8c13-c96368b0e3ed\",\n                \"orguuid\": \"9ce77b56-7ab6-4d9d-b460-bb4668e64be9\",\n                \"customParams\": [],\n                \"services\": null,\n                \"availableRoutingInstances\": null,\n                \"availableProviderOrgs\": null,\n                \"availableServiceNodeGroups\": [\n                    \"Default_All_Services\"\n                ],\n                \"createdAt\": 1564653175484,\n                \"updatedAt\": 1564743818701,\n                \"suspendedAt\": 1564653175484,\n                \"terminatedAt\": 1564653175484,\n                \"rmaedAt\": null,\n                \"appliance\": null,\n                \"applianceOrgNetworkConn\": [\n                    {\n                        \"id\": null,\n                        \"appliance\": null,\n                        \"uuid\": null,\n                        \"applianceUuid\": null,\n                        \"org_uuid\": \"9ce77b56-7ab6-4d9d-b460-bb4668e64be9\",\n                        \"slot\": 0,\n                        \"index\": 2,\n                        \"subunit\": 12,\n                        \"parentInterface\": \"none\",\n                        \"ipv4Address\": [\n                            \"10.192.158.72/16\"\n                        ],\n                        \"ipv6Address\": null,\n                        \"gateway\": null,\n                        \"isconnected\": false,\n                        \"ipAddressAllocationMode\": \"manual\",\n                        \"ipAddressAllocationModev6\": \"manual\",\n                        \"network\": \"locOrg\",\n                        \"parentNetwork\": null,\n                        \"connectedExternalNetwork\": null,\n                        \"networkType\": \"data-external\",\n                        \"vlan\": 12,\n                        \"routingInstance\": null\n                    }\n                ],\n                \"organizationCustomParams\": null\n            }\n        ],\n        \"intraChassisDeploymentDetails\": null,\n        \"vsns\": null,\n        \"software-version\": \"20.2.0-FRS bf21c09 20190326\",\n        \"current-upgrade-status\": null,\n        \"last-upgrade-status\": null,\n        \"package-id\": null,\n        \"ha_paired_appliance_name\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n\t {\n\t\t\"timestamp\": 1560251250008,\n\t\t\"status\": 400,\n\t\t\"error\": \"Not Found\",\n\t\t\"message\": \"No message available\",\n     \"path\": \"/vnms/cloud/systems/getApplianceByUuid/2225f707-6183-48be-8c13-c96368b0e3ed\"\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliance-subjugate",
    "title": "Get configuration for enable/disable appliance subjugation",
    "version": "20.2.0",
    "name": "getApplianceSubjugateList",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "NA",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "         Status: 200 OK\n{\n          \"appliance-subjugate\": {\n           \"enable\": \"true\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/config-save/files/file",
    "title": "Get list of file objects",
    "version": "20.2.0",
    "name": "getFileList",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "NA",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "         Status: 200 OK\n{\n          \"file\": {\n           \"file-name\": \"string-1\",\n           \"device-name\": \"string-4\",\n           \"size\": \"500\",\n           \"creation-time\": \"2014-10-17T14:00:00-05:00\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  }
] });
