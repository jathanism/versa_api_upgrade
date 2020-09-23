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
    "group": "/home/akshay/Work/director/vnms-main/cdb-adaptor/src/main/resources/yangs/versa-rest/vd_appliances_management.js",
    "groupTitle": "/home/akshay/Work/director/vnms-main/cdb-adaptor/src/main/resources/yangs/versa-rest/vd_appliances_management.js",
    "name": ""
  },
  {
    "type": "POST",
    "url": "/api/config/nms/provider/appliances",
    "title": "Create appliance object",
    "version": "16.1.2",
    "name": "createAppliance",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"appliance\": {\n  \"name\": \"value123\",\n  \"type\": \"vmware\",\n  \"sub-type\": \"value123\",\n  \"branch-list\": [ \"value1\" ],\n  \"staging-controller\": \"false\",\n  \"post-staging-controller\": \"false\",\n  \"sync-from-needed\": \"true\",\n  \"controller-list\": [ \"string-4\" ],\n  \"remote-uuid\": \"string-5\",\n  \"id\": \"50\",\n  \"userlabel\": \"string-4\",\n  \"created-at\": \"2014-10-17T14:00:00-05:00\",\n  \"created-by\": \"string-4\",\n  \"creation-status\": \"false\",\n  \"ztp-stage\": \"string-1\",\n  \"traffic-mode\": \"string-1\",\n  \"branch-id\": \"50\",\n  \"ha-paired-appliance-name\": \"string-3\",\n  \"vsg-id\": \"30\",\n  \"users\": {\n   \"user\": {\n    \"name\": \"string-5\",\n    \"password\": \"password\"\n   }\n  },\n  \"subscription\": {\n   \"solution-tier\": \"value123\",\n   \"bandwidth\": \"value123\",\n   \"state\": \"value123\",\n   \"created-at\": \"2014-10-17T14:00:00-05:00\",\n   \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n   \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n   \"rmaed-at\": \"2014-10-17T14:00:00-05:00\",\n   \"is-analytics-enabled\": \"true\",\n   \"is-primary\": \"false\",\n   \"custom-param\": {\n    \"name\": \"string-5\",\n    \"value\": \"string-5\"\n   }\n  },\n  \"sngs\": {\n   \"vcsnflavor\": \"string-1\",\n   \"sng\": {\n    \"name\": \"string-1\",\n    \"id\": \"2\",\n    \"flavor\": \"string-4\",\n    \"services\": [ \"string-5\" ],\n    \"isPartOfVCSN\": \"string-5\"\n   }\n  },\n  \"data-external-networks\": [ \"string-4\" ],\n  \"nfv-type\": \"string-3\",\n  \"node-type\": \"string-2\",\n  \"isprimaryvapp\": \"true\",\n  \"vappid\": \"string-3\",\n  \"security-group\": \"string-3\",\n  \"nco\": \"string-2\",\n  \"max-vsns\": \"1\",\n  \"site\": \"\",\n  \"uuid\": \"string-3\",\n  \"wan-ip-list\": [ \"string-3\" ],\n  \"ip-address\": \"hostname\",\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"3000\",\n    \"subunit\": \"4000\",\n    \"parent-interface\": \"string-4\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"10.0.0.44\",\n    \"mask\": \"192.168.0.15\",\n    \"gateway\": \"10.0.0.44\",\n    \"external-ipaddress\": \"10.0.0.44\",\n    \"isconnected\": \"false\",\n    \"ipaddress-allocation-mode\": \"string-1\",\n    \"ipaddress-allocation-mode-v6\": \"string-5\",\n    \"network\": \"string-3\",\n    \"parent-network\": \"string-5\",\n    \"connected-external-network\": \"string-2\",\n    \"primary\": \"true\",\n    \"network-type\": \"data-external\",\n    \"network-type-val\": \"string-3\",\n    \"vxlan\": \"500\",\n    \"routing-instance\": \"string-5\"\n   }\n  },\n  \"slot\": \"4\",\n  \"region\": \"string-1\",\n  \"vmid\": \"string-1\",\n  \"create-source\": \"string-5\",\n  \"software-details\": {\n   \"software-version\": \"string-1\",\n   \"current-upgrade-status\": \"completed\",\n   \"last-upgrade-status\": \"success\",\n   \"package-id\": \"string-4\"\n  },\n  \"num-cpus\": \"2\",\n  \"memory-size\": \"6000\",\n  \"num-nics\": \"3\",\n  \"resources\": {\n   \"resource\": {\n    \"name\": \"string-5\",\n    \"resource-type\": \"type1\",\n    \"resource-info\": \"string-2\"\n   }\n  },\n  \"intra-chassis-ha\": {\n   \"enabled\": \"false\",\n   \"stand-by-vcsn\": {\n    \"uuid\": \"string-5\",\n    \"wan-ip-list\": [ \"string-4\" ],\n    \"ip-address\": \"hostname\",\n    \"network-connections\": {\n     \"network-connection\": {\n      \"index\": \"1000\",\n      \"subunit\": \"2000\",\n      \"parent-interface\": \"string-5\",\n      \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n      \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n      \"ipaddress\": \"192.168.0.15\",\n      \"mask\": \"10.0.0.44\",\n      \"gateway\": \"192.168.0.15\",\n      \"external-ipaddress\": \"192.168.0.15\",\n      \"isconnected\": \"false\",\n      \"ipaddress-allocation-mode\": \"string-2\",\n      \"ipaddress-allocation-mode-v6\": \"string-4\",\n      \"network\": \"string-2\",\n      \"parent-network\": \"string-3\",\n      \"connected-external-network\": \"string-5\",\n      \"primary\": \"true\",\n      \"network-type\": \"none\",\n      \"network-type-val\": \"string-4\",\n      \"vxlan\": \"500\",\n      \"routing-instance\": \"string-3\"\n     }\n    },\n    \"slot\": \"1\",\n    \"region\": \"string-5\",\n    \"vmid\": \"string-5\",\n    \"create-source\": \"string-2\",\n    \"software-details\": {\n     \"software-version\": \"string-3\",\n     \"current-upgrade-status\": \"completed\",\n     \"last-upgrade-status\": \"success\",\n     \"package-id\": \"string-3\"\n    },\n    \"num-cpus\": \"4\",\n    \"memory-size\": \"5000\",\n    \"num-nics\": \"2\",\n    \"resources\": {\n     \"resource\": {\n      \"name\": \"string-2\",\n      \"resource-type\": \"type1\",\n      \"resource-info\": \"string-2\"\n     }\n    }\n   },\n   \"vcsn-ip-addresses\": {\n    \"active-vcsn-ipaddress\": \"10.0.0.44\",\n    \"stand-by-vcsn-ip-address\": \"10.0.0.44\"\n   },\n   \"master-ip-addresses\": {\n    \"mgmt-internal-master-ip\": \"192.168.0.15\",\n    \"mgmt-external-master-ip\": \"10.0.0.44\",\n    \"mgmt-internal-address-range-name\": \"string-2\",\n    \"mgmt-external-address-range-name\": \"string-2\"\n   },\n   \"availability-zones\": {\n    \"active-availability-zone\": \"string-4\",\n    \"stand-by-availability-zone\": \"string-4\"\n   }\n  },\n  \"orgs\": {\n   \"uuid\": \"\",\n   \"services\": [ \"string-5\" ],\n   \"available-routing-instances\": [ \"string-3\" ],\n   \"available-provider-orgs\": [ \"string-1\" ],\n   \"available-service-node-groups\": [ \"string-1\" ],\n   \"network-connections\": {\n    \"network-connection\": {\n     \"index\": \"2000\",\n     \"subunit\": \"4000\",\n     \"parent-interface\": \"string-3\",\n     \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n     \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n     \"ipaddress\": \"192.168.0.15\",\n     \"mask\": \"10.0.0.44\",\n     \"gateway\": \"10.0.0.44\",\n     \"external-ipaddress\": \"10.0.0.44\",\n     \"isconnected\": \"true\",\n     \"ipaddress-allocation-mode\": \"string-3\",\n     \"ipaddress-allocation-mode-v6\": \"string-3\",\n     \"network\": \"string-4\",\n     \"parent-network\": \"string-1\",\n     \"connected-external-network\": \"string-1\",\n     \"primary\": \"true\",\n     \"network-type\": \"data-external\",\n     \"network-type-val\": \"string-2\",\n     \"vxlan\": \"300\",\n     \"routing-instance\": \"string-3\"\n    }\n   },\n   \"subscription\": {\n    \"solution-tier\": \"value123\",\n    \"bandwidth\": \"value123\",\n    \"state\": \"value123\",\n    \"created-at\": \"2014-10-17T14:00:00-05:00\",\n    \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n    \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n    \"is-analytics-enabled\": \"false\",\n    \"custom-param\": {\n     \"name\": \"string-2\",\n     \"value\": \"string-4\"\n    }\n   }\n  },\n  \"vsns\": {\n   \"vsn\": {\n    \"uuid\": \"string-1\",\n    \"wan-ip-list\": [ \"string-1\" ],\n    \"ip-address\": \"hostname\",\n    \"network-connections\": {\n     \"network-connection\": {\n      \"index\": \"2000\",\n      \"subunit\": \"1000\",\n      \"parent-interface\": \"string-1\",\n      \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n      \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n      \"ipaddress\": \"192.168.0.15\",\n      \"mask\": \"192.168.0.15\",\n      \"gateway\": \"192.168.0.15\",\n      \"external-ipaddress\": \"10.0.0.44\",\n      \"isconnected\": \"true\",\n      \"ipaddress-allocation-mode\": \"string-5\",\n      \"ipaddress-allocation-mode-v6\": \"string-3\",\n      \"network\": \"string-3\",\n      \"parent-network\": \"string-5\",\n      \"connected-external-network\": \"string-5\",\n      \"primary\": \"true\",\n      \"network-type\": \"preconfigured\",\n      \"network-type-val\": \"string-2\",\n      \"vxlan\": \"300\",\n      \"routing-instance\": \"string-3\"\n     }\n    },\n    \"slot\": \"3\",\n    \"region\": \"string-3\",\n    \"vmid\": \"string-4\",\n    \"create-source\": \"string-5\",\n    \"software-details\": {\n     \"software-version\": \"string-2\",\n     \"current-upgrade-status\": \"completed\",\n     \"last-upgrade-status\": \"success\",\n     \"package-id\": \"string-3\"\n    },\n    \"num-cpus\": \"2\",\n    \"memory-size\": \"1000\",\n    \"num-nics\": \"6\",\n    \"resources\": {\n     \"resource\": {\n      \"name\": \"string-5\",\n      \"resource-type\": \"type1\",\n      \"resource-info\": \"string-3\"\n     }\n    },\n    \"orgs\": {\n     \"uuid\": \"\",\n     \"network-connections\": {\n      \"network-connection\": {\n       \"index\": \"1000\",\n       \"subunit\": \"3000\",\n       \"parent-interface\": \"string-3\",\n       \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n       \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n       \"ipaddress\": \"192.168.0.15\",\n       \"mask\": \"192.168.0.15\",\n       \"gateway\": \"10.0.0.44\",\n       \"external-ipaddress\": \"192.168.0.15\",\n       \"isconnected\": \"false\",\n       \"ipaddress-allocation-mode\": \"string-3\",\n       \"ipaddress-allocation-mode-v6\": \"string-4\",\n       \"network\": \"string-2\",\n       \"parent-network\": \"string-2\",\n       \"connected-external-network\": \"string-3\",\n       \"primary\": \"false\",\n       \"network-type\": \"preconfigured\",\n       \"network-type-val\": \"string-2\",\n       \"vxlan\": \"700\",\n       \"routing-instance\": \"string-5\"\n      }\n     }\n    }\n   }\n  },\n  \"org\": \"\",\n  \"cmsorg\": \"string-5\",\n  \"orgvdc\": \"string-1\",\n  \"connector\": \"string-1\",\n  \"vapptemplateid\": \"string-2\",\n  \"session-statistics\": {\n   \"session-count\": \"300\",\n   \"session-created\": \"600\",\n   \"session-closed\": \"400\",\n   \"capacity\": \"1.5\"\n  },\n  \"policies\": {\n   \"heal-policy\": {\n    \"action\": {\n     \"heal-operation-enabled\": \"state1\"\n    }\n   }\n  },\n  \"status\": {\n   \"name\": \"string-1\",\n   \"last-updated-time\": \"string-5\",\n   \"overall-status\": \"string-4\",\n   \"sync-status\": \"string-5\",\n   \"ping-status\": \"string-3\",\n   \"services-status\": \"string-1\",\n   \"branch-maintenance-mode\": \"true\",\n   \"branch-maintenance-mode-ip\": \"string-2\",\n   \"intra-chassis-ha-status\": {\n    \"vcsn-nodes\": {\n     \"vcsn-node\": {\n      \"vm-name\": \"string-3\",\n      \"slot-number\": \"100\",\n      \"role\": \"string-3\"\n     }\n    }\n   },\n   \"nodes\": {\n    \"node\": {\n     \"slot-id\": \"string-4\",\n     \"vm-name\": \"string-2\",\n     \"vm-status\": \"string-2\",\n     \"host-ip\": \"string-4\",\n     \"node-type\": \"string-3\",\n     \"cpu-load\": \"string-3\",\n     \"memory-load\": \"string-5\",\n     \"load-factor\": \"string-3\"\n    }\n   },\n   \"ucpe-nodes\": {\n    \"node\": {\n     \"uuid\": \"string-3\",\n     \"name\": \"string-3\",\n     \"status\": \"string-1\",\n     \"cpu-load\": \"string-3\",\n     \"memory-load\": \"string-5\",\n     \"disk-load\": \"string-1\"\n    }\n   }\n  },\n  \"ucpe-nodes\": {\n   \"node\": {\n    \"uuid\": \"string-4\",\n    \"name\": \"string-2\",\n    \"vendor\": \"string-5\",\n    \"ip-address\": \"hostname\",\n    \"version\": \"string-2\",\n    \"created-at\": \"2014-10-17T14:00:00-05:00\",\n    \"creation-status\": \"false\"\n   }\n  }\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>/subscription",
    "title": "Create custom-param object",
    "version": "16.1.2",
    "name": "createCustomParam",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"custom-param\": {\n  \"name\": \"string-2\",\n  \"value\": \"string-4\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/subscription",
    "title": "Create custom-param object",
    "version": "16.1.2",
    "name": "createCustomParam",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"custom-param\": {\n  \"name\": \"string-5\",\n  \"value\": \"string-5\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/config-save/files",
    "title": "Create file object",
    "version": "16.1.2",
    "name": "createFile",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"file\": {\n  \"file-name\": \"string-2\",\n  \"device-name\": \"string-4\",\n  \"size\": \"600\",\n  \"creation-time\": \"2014-10-17T14:00:00-05:00\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/network-connections",
    "title": "Create network-connection object",
    "version": "16.1.2",
    "name": "createNetworkConnection",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"2000\",\n  \"subunit\": \"1000\",\n  \"parent-interface\": \"string-1\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"192.168.0.15\",\n  \"mask\": \"192.168.0.15\",\n  \"gateway\": \"192.168.0.15\",\n  \"external-ipaddress\": \"10.0.0.44\",\n  \"isconnected\": \"true\",\n  \"ipaddress-allocation-mode\": \"string-5\",\n  \"ipaddress-allocation-mode-v6\": \"string-3\",\n  \"network\": \"string-3\",\n  \"parent-network\": \"string-5\",\n  \"connected-external-network\": \"string-5\",\n  \"primary\": \"true\",\n  \"network-type\": \"preconfigured\",\n  \"network-type-val\": \"string-2\",\n  \"vxlan\": \"300\",\n  \"routing-instance\": \"string-3\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/orgs/<UUID>/network-connections",
    "title": "Create network-connection object",
    "version": "16.1.2",
    "name": "createNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"1000\",\n  \"subunit\": \"3000\",\n  \"parent-interface\": \"string-3\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"192.168.0.15\",\n  \"mask\": \"192.168.0.15\",\n  \"gateway\": \"10.0.0.44\",\n  \"external-ipaddress\": \"192.168.0.15\",\n  \"isconnected\": \"false\",\n  \"ipaddress-allocation-mode\": \"string-3\",\n  \"ipaddress-allocation-mode-v6\": \"string-4\",\n  \"network\": \"string-2\",\n  \"parent-network\": \"string-2\",\n  \"connected-external-network\": \"string-3\",\n  \"primary\": \"false\",\n  \"network-type\": \"preconfigured\",\n  \"network-type-val\": \"string-2\",\n  \"vxlan\": \"700\",\n  \"routing-instance\": \"string-5\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/network-connections",
    "title": "Create network-connection object",
    "version": "16.1.2",
    "name": "createNetworkConnection",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"3000\",\n  \"subunit\": \"4000\",\n  \"parent-interface\": \"string-4\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"10.0.0.44\",\n  \"mask\": \"192.168.0.15\",\n  \"gateway\": \"10.0.0.44\",\n  \"external-ipaddress\": \"10.0.0.44\",\n  \"isconnected\": \"false\",\n  \"ipaddress-allocation-mode\": \"string-1\",\n  \"ipaddress-allocation-mode-v6\": \"string-5\",\n  \"network\": \"string-3\",\n  \"parent-network\": \"string-5\",\n  \"connected-external-network\": \"string-2\",\n  \"primary\": \"true\",\n  \"network-type\": \"data-external\",\n  \"network-type-val\": \"string-3\",\n  \"vxlan\": \"500\",\n  \"routing-instance\": \"string-5\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/network-connections",
    "title": "Create network-connection object",
    "version": "16.1.2",
    "name": "createNetworkConnection",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"1000\",\n  \"subunit\": \"2000\",\n  \"parent-interface\": \"string-5\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"192.168.0.15\",\n  \"mask\": \"10.0.0.44\",\n  \"gateway\": \"192.168.0.15\",\n  \"external-ipaddress\": \"192.168.0.15\",\n  \"isconnected\": \"false\",\n  \"ipaddress-allocation-mode\": \"string-2\",\n  \"ipaddress-allocation-mode-v6\": \"string-4\",\n  \"network\": \"string-2\",\n  \"parent-network\": \"string-3\",\n  \"connected-external-network\": \"string-5\",\n  \"primary\": \"true\",\n  \"network-type\": \"none\",\n  \"network-type-val\": \"string-4\",\n  \"vxlan\": \"500\",\n  \"routing-instance\": \"string-3\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>/network-connections",
    "title": "Create network-connection object",
    "version": "16.1.2",
    "name": "createNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"2000\",\n  \"subunit\": \"4000\",\n  \"parent-interface\": \"string-3\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"192.168.0.15\",\n  \"mask\": \"10.0.0.44\",\n  \"gateway\": \"10.0.0.44\",\n  \"external-ipaddress\": \"10.0.0.44\",\n  \"isconnected\": \"true\",\n  \"ipaddress-allocation-mode\": \"string-3\",\n  \"ipaddress-allocation-mode-v6\": \"string-3\",\n  \"network\": \"string-4\",\n  \"parent-network\": \"string-1\",\n  \"connected-external-network\": \"string-1\",\n  \"primary\": \"true\",\n  \"network-type\": \"data-external\",\n  \"network-type-val\": \"string-2\",\n  \"vxlan\": \"300\",\n  \"routing-instance\": \"string-3\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/ucpe-nodes",
    "title": "Create node object",
    "version": "16.1.2",
    "name": "createNode",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"node\": {\n  \"uuid\": \"string-4\",\n  \"name\": \"string-2\",\n  \"vendor\": \"string-5\",\n  \"ip-address\": \"hostname\",\n  \"version\": \"string-2\",\n  \"created-at\": \"2014-10-17T14:00:00-05:00\",\n  \"creation-status\": \"false\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn",
    "title": "Create orgs object",
    "version": "16.1.2",
    "name": "createOrgs",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"orgs\": {\n  \"uuid\": \"\",\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"1000\",\n    \"subunit\": \"3000\",\n    \"parent-interface\": \"string-3\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"192.168.0.15\",\n    \"mask\": \"192.168.0.15\",\n    \"gateway\": \"10.0.0.44\",\n    \"external-ipaddress\": \"192.168.0.15\",\n    \"isconnected\": \"false\",\n    \"ipaddress-allocation-mode\": \"string-3\",\n    \"ipaddress-allocation-mode-v6\": \"string-4\",\n    \"network\": \"string-2\",\n    \"parent-network\": \"string-2\",\n    \"connected-external-network\": \"string-3\",\n    \"primary\": \"false\",\n    \"network-type\": \"preconfigured\",\n    \"network-type-val\": \"string-2\",\n    \"vxlan\": \"700\",\n    \"routing-instance\": \"string-5\"\n   }\n  }\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance",
    "title": "Create orgs object",
    "version": "16.1.2",
    "name": "createOrgs",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"orgs\": {\n  \"uuid\": \"\",\n  \"services\": [ \"string-1\" ],\n  \"available-routing-instances\": [ \"string-5\" ],\n  \"available-provider-orgs\": [ \"string-2\" ],\n  \"available-service-node-groups\": [ \"string-2\" ],\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"2000\",\n    \"subunit\": \"4000\",\n    \"parent-interface\": \"string-3\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"192.168.0.15\",\n    \"mask\": \"10.0.0.44\",\n    \"gateway\": \"10.0.0.44\",\n    \"external-ipaddress\": \"10.0.0.44\",\n    \"isconnected\": \"true\",\n    \"ipaddress-allocation-mode\": \"string-3\",\n    \"ipaddress-allocation-mode-v6\": \"string-3\",\n    \"network\": \"string-4\",\n    \"parent-network\": \"string-1\",\n    \"connected-external-network\": \"string-1\",\n    \"primary\": \"true\",\n    \"network-type\": \"data-external\",\n    \"network-type-val\": \"string-2\",\n    \"vxlan\": \"300\",\n    \"routing-instance\": \"string-3\"\n   }\n  },\n  \"subscription\": {\n   \"solution-tier\": \"value123\",\n   \"bandwidth\": \"value123\",\n   \"state\": \"value123\",\n   \"created-at\": \"2014-10-17T14:00:00-05:00\",\n   \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n   \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n   \"is-analytics-enabled\": \"false\",\n   \"custom-param\": {\n    \"name\": \"string-2\",\n    \"value\": \"string-4\"\n   }\n  }\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/resources",
    "title": "Create resource object",
    "version": "16.1.2",
    "name": "createResource",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"resource\": {\n  \"name\": \"string-5\",\n  \"resource-type\": \"type1\",\n  \"resource-info\": \"string-3\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/resources",
    "title": "Create resource object",
    "version": "16.1.2",
    "name": "createResource",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"resource\": {\n  \"name\": \"string-5\",\n  \"resource-type\": \"type1\",\n  \"resource-info\": \"string-2\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/resources",
    "title": "Create resource object",
    "version": "16.1.2",
    "name": "createResource",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"resource\": {\n  \"name\": \"string-2\",\n  \"resource-type\": \"type1\",\n  \"resource-info\": \"string-2\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/sngs",
    "title": "Create sng object",
    "version": "16.1.2",
    "name": "createSng",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"sng\": {\n  \"name\": \"string-1\",\n  \"id\": \"2\",\n  \"flavor\": \"string-4\",\n  \"services\": [ \"string-2\" ],\n  \"isPartOfVCSN\": \"string-5\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/users",
    "title": "Create user object",
    "version": "16.1.2",
    "name": "createUser",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"user\": {\n  \"name\": \"string-5\",\n  \"password\": \"password\"\n }\n}",
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
    "type": "POST",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns",
    "title": "Create vsn object",
    "version": "16.1.2",
    "name": "createVsn",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"vsn\": {\n  \"uuid\": \"string-1\",\n  \"wan-ip-list\": [ \"string-5\" ],\n  \"ip-address\": \"hostname\",\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"2000\",\n    \"subunit\": \"1000\",\n    \"parent-interface\": \"string-1\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"192.168.0.15\",\n    \"mask\": \"192.168.0.15\",\n    \"gateway\": \"192.168.0.15\",\n    \"external-ipaddress\": \"10.0.0.44\",\n    \"isconnected\": \"true\",\n    \"ipaddress-allocation-mode\": \"string-5\",\n    \"ipaddress-allocation-mode-v6\": \"string-3\",\n    \"network\": \"string-3\",\n    \"parent-network\": \"string-5\",\n    \"connected-external-network\": \"string-5\",\n    \"primary\": \"true\",\n    \"network-type\": \"preconfigured\",\n    \"network-type-val\": \"string-2\",\n    \"vxlan\": \"300\",\n    \"routing-instance\": \"string-3\"\n   }\n  },\n  \"slot\": \"3\",\n  \"region\": \"string-3\",\n  \"vmid\": \"string-4\",\n  \"create-source\": \"string-5\",\n  \"software-details\": {\n   \"software-version\": \"string-2\",\n   \"current-upgrade-status\": \"completed\",\n   \"last-upgrade-status\": \"success\",\n   \"package-id\": \"string-3\"\n  },\n  \"num-cpus\": \"2\",\n  \"memory-size\": \"1000\",\n  \"num-nics\": \"6\",\n  \"resources\": {\n   \"resource\": {\n    \"name\": \"string-5\",\n    \"resource-type\": \"type1\",\n    \"resource-info\": \"string-3\"\n   }\n  },\n  \"orgs\": {\n   \"uuid\": \"\",\n   \"network-connections\": {\n    \"network-connection\": {\n     \"index\": \"1000\",\n     \"subunit\": \"3000\",\n     \"parent-interface\": \"string-3\",\n     \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n     \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n     \"ipaddress\": \"192.168.0.15\",\n     \"mask\": \"192.168.0.15\",\n     \"gateway\": \"10.0.0.44\",\n     \"external-ipaddress\": \"192.168.0.15\",\n     \"isconnected\": \"false\",\n     \"ipaddress-allocation-mode\": \"string-3\",\n     \"ipaddress-allocation-mode-v6\": \"string-4\",\n     \"network\": \"string-2\",\n     \"parent-network\": \"string-2\",\n     \"connected-external-network\": \"string-3\",\n     \"primary\": \"false\",\n     \"network-type\": \"preconfigured\",\n     \"network-type-val\": \"string-2\",\n     \"vxlan\": \"700\",\n     \"routing-instance\": \"string-5\"\n    }\n   }\n  }\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>",
    "title": "Delete appliance object",
    "version": "16.1.2",
    "name": "deleteAppliance",
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
          "content": "Status: 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>/subscription/custom-param/<NAME>",
    "title": "Delete custom-param object",
    "version": "16.1.2",
    "name": "deleteCustomParam",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/subscription/custom-param/<NAME>",
    "title": "Delete custom-param object",
    "version": "16.1.2",
    "name": "deleteCustomParam",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/config-save/files/file/<FILE-NAME>",
    "title": "Delete file object",
    "version": "16.1.2",
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/orgs/<UUID>/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Delete network-connection object",
    "version": "16.1.2",
    "name": "deleteNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Delete network-connection object",
    "version": "16.1.2",
    "name": "deleteNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Delete network-connection object",
    "version": "16.1.2",
    "name": "deleteNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Delete network-connection object",
    "version": "16.1.2",
    "name": "deleteNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Delete network-connection object",
    "version": "16.1.2",
    "name": "deleteNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/ucpe-nodes/node/<UNIQUE-UUID-OF-THE-THIRD-PARTY-VNF>",
    "title": "Delete node object",
    "version": "16.1.2",
    "name": "deleteNode",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unique-uuid-of-the-third-party-vnf",
            "description": "<p>unique uuid of the third party vnf</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>",
    "title": "Delete orgs object",
    "version": "16.1.2",
    "name": "deleteOrgs",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/orgs/<UUID>",
    "title": "Delete orgs object",
    "version": "16.1.2",
    "name": "deleteOrgs",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/resources/resource/<NAME>",
    "title": "Delete resource object",
    "version": "16.1.2",
    "name": "deleteResource",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/resources/resource/<NAME>",
    "title": "Delete resource object",
    "version": "16.1.2",
    "name": "deleteResource",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/resources/resource/<NAME>",
    "title": "Delete resource object",
    "version": "16.1.2",
    "name": "deleteResource",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/sngs/sng/<NAME>",
    "title": "Delete sng object",
    "version": "16.1.2",
    "name": "deleteSng",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/users/user/<USER-NAME>",
    "title": "Delete user object",
    "version": "16.1.2",
    "name": "deleteUser",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user-name",
            "description": "<p>user name</p>"
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
    "type": "DELETE",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>",
    "title": "Delete vsn object",
    "version": "16.1.2",
    "name": "deleteVsn",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>",
    "title": "Edit appliance object",
    "version": "16.1.2",
    "name": "editAppliance",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"appliance\": {\n  \"name\": \"value123\",\n  \"type\": \"vmware\",\n  \"sub-type\": \"value123\",\n  \"branch-list\": [ \"value2\" ],\n  \"staging-controller\": \"false\",\n  \"post-staging-controller\": \"false\",\n  \"sync-from-needed\": \"true\",\n  \"controller-list\": [ \"string-2\" ],\n  \"remote-uuid\": \"string-5\",\n  \"id\": \"50\",\n  \"userlabel\": \"string-4\",\n  \"created-at\": \"2014-10-17T14:00:00-05:00\",\n  \"created-by\": \"string-4\",\n  \"creation-status\": \"false\",\n  \"ztp-stage\": \"string-1\",\n  \"traffic-mode\": \"string-1\",\n  \"branch-id\": \"50\",\n  \"ha-paired-appliance-name\": \"string-3\",\n  \"vsg-id\": \"30\",\n  \"users\": {\n   \"user\": {\n    \"name\": \"string-5\",\n    \"password\": \"password\"\n   }\n  },\n  \"subscription\": {\n   \"solution-tier\": \"value123\",\n   \"bandwidth\": \"value123\",\n   \"state\": \"value123\",\n   \"created-at\": \"2014-10-17T14:00:00-05:00\",\n   \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n   \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n   \"rmaed-at\": \"2014-10-17T14:00:00-05:00\",\n   \"is-analytics-enabled\": \"true\",\n   \"is-primary\": \"false\",\n   \"custom-param\": {\n    \"name\": \"string-5\",\n    \"value\": \"string-5\"\n   }\n  },\n  \"sngs\": {\n   \"vcsnflavor\": \"string-1\",\n   \"sng\": {\n    \"name\": \"string-1\",\n    \"id\": \"2\",\n    \"flavor\": \"string-4\",\n    \"services\": [ \"string-5\" ],\n    \"isPartOfVCSN\": \"string-5\"\n   }\n  },\n  \"data-external-networks\": [ \"string-5\" ],\n  \"nfv-type\": \"string-3\",\n  \"node-type\": \"string-2\",\n  \"isprimaryvapp\": \"true\",\n  \"vappid\": \"string-3\",\n  \"security-group\": \"string-3\",\n  \"nco\": \"string-2\",\n  \"max-vsns\": \"1\",\n  \"site\": \"\",\n  \"uuid\": \"string-3\",\n  \"wan-ip-list\": [ \"string-5\" ],\n  \"ip-address\": \"hostname\",\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"3000\",\n    \"subunit\": \"4000\",\n    \"parent-interface\": \"string-4\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"10.0.0.44\",\n    \"mask\": \"192.168.0.15\",\n    \"gateway\": \"10.0.0.44\",\n    \"external-ipaddress\": \"10.0.0.44\",\n    \"isconnected\": \"false\",\n    \"ipaddress-allocation-mode\": \"string-1\",\n    \"ipaddress-allocation-mode-v6\": \"string-5\",\n    \"network\": \"string-3\",\n    \"parent-network\": \"string-5\",\n    \"connected-external-network\": \"string-2\",\n    \"primary\": \"true\",\n    \"network-type\": \"data-external\",\n    \"network-type-val\": \"string-3\",\n    \"vxlan\": \"500\",\n    \"routing-instance\": \"string-5\"\n   }\n  },\n  \"slot\": \"4\",\n  \"region\": \"string-1\",\n  \"vmid\": \"string-1\",\n  \"create-source\": \"string-5\",\n  \"software-details\": {\n   \"software-version\": \"string-1\",\n   \"current-upgrade-status\": \"completed\",\n   \"last-upgrade-status\": \"success\",\n   \"package-id\": \"string-4\"\n  },\n  \"num-cpus\": \"2\",\n  \"memory-size\": \"6000\",\n  \"num-nics\": \"3\",\n  \"resources\": {\n   \"resource\": {\n    \"name\": \"string-5\",\n    \"resource-type\": \"type1\",\n    \"resource-info\": \"string-2\"\n   }\n  },\n  \"intra-chassis-ha\": {\n   \"enabled\": \"false\",\n   \"stand-by-vcsn\": {\n    \"uuid\": \"string-5\",\n    \"wan-ip-list\": [ \"string-1\" ],\n    \"ip-address\": \"hostname\",\n    \"network-connections\": {\n     \"network-connection\": {\n      \"index\": \"1000\",\n      \"subunit\": \"2000\",\n      \"parent-interface\": \"string-5\",\n      \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n      \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n      \"ipaddress\": \"192.168.0.15\",\n      \"mask\": \"10.0.0.44\",\n      \"gateway\": \"192.168.0.15\",\n      \"external-ipaddress\": \"192.168.0.15\",\n      \"isconnected\": \"false\",\n      \"ipaddress-allocation-mode\": \"string-2\",\n      \"ipaddress-allocation-mode-v6\": \"string-4\",\n      \"network\": \"string-2\",\n      \"parent-network\": \"string-3\",\n      \"connected-external-network\": \"string-5\",\n      \"primary\": \"true\",\n      \"network-type\": \"none\",\n      \"network-type-val\": \"string-4\",\n      \"vxlan\": \"500\",\n      \"routing-instance\": \"string-3\"\n     }\n    },\n    \"slot\": \"1\",\n    \"region\": \"string-5\",\n    \"vmid\": \"string-5\",\n    \"create-source\": \"string-2\",\n    \"software-details\": {\n     \"software-version\": \"string-3\",\n     \"current-upgrade-status\": \"completed\",\n     \"last-upgrade-status\": \"success\",\n     \"package-id\": \"string-3\"\n    },\n    \"num-cpus\": \"4\",\n    \"memory-size\": \"5000\",\n    \"num-nics\": \"2\",\n    \"resources\": {\n     \"resource\": {\n      \"name\": \"string-2\",\n      \"resource-type\": \"type1\",\n      \"resource-info\": \"string-2\"\n     }\n    }\n   },\n   \"vcsn-ip-addresses\": {\n    \"active-vcsn-ipaddress\": \"10.0.0.44\",\n    \"stand-by-vcsn-ip-address\": \"10.0.0.44\"\n   },\n   \"master-ip-addresses\": {\n    \"mgmt-internal-master-ip\": \"192.168.0.15\",\n    \"mgmt-external-master-ip\": \"10.0.0.44\",\n    \"mgmt-internal-address-range-name\": \"string-2\",\n    \"mgmt-external-address-range-name\": \"string-2\"\n   },\n   \"availability-zones\": {\n    \"active-availability-zone\": \"string-4\",\n    \"stand-by-availability-zone\": \"string-4\"\n   }\n  },\n  \"orgs\": {\n   \"uuid\": \"\",\n   \"services\": [ \"string-1\" ],\n   \"available-routing-instances\": [ \"string-1\" ],\n   \"available-provider-orgs\": [ \"string-1\" ],\n   \"available-service-node-groups\": [ \"string-1\" ],\n   \"network-connections\": {\n    \"network-connection\": {\n     \"index\": \"2000\",\n     \"subunit\": \"4000\",\n     \"parent-interface\": \"string-3\",\n     \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n     \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n     \"ipaddress\": \"192.168.0.15\",\n     \"mask\": \"10.0.0.44\",\n     \"gateway\": \"10.0.0.44\",\n     \"external-ipaddress\": \"10.0.0.44\",\n     \"isconnected\": \"true\",\n     \"ipaddress-allocation-mode\": \"string-3\",\n     \"ipaddress-allocation-mode-v6\": \"string-3\",\n     \"network\": \"string-4\",\n     \"parent-network\": \"string-1\",\n     \"connected-external-network\": \"string-1\",\n     \"primary\": \"true\",\n     \"network-type\": \"data-external\",\n     \"network-type-val\": \"string-2\",\n     \"vxlan\": \"300\",\n     \"routing-instance\": \"string-3\"\n    }\n   },\n   \"subscription\": {\n    \"solution-tier\": \"value123\",\n    \"bandwidth\": \"value123\",\n    \"state\": \"value123\",\n    \"created-at\": \"2014-10-17T14:00:00-05:00\",\n    \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n    \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n    \"is-analytics-enabled\": \"false\",\n    \"custom-param\": {\n     \"name\": \"string-2\",\n     \"value\": \"string-4\"\n    }\n   }\n  },\n  \"vsns\": {\n   \"vsn\": {\n    \"uuid\": \"string-1\",\n    \"wan-ip-list\": [ \"string-3\" ],\n    \"ip-address\": \"hostname\",\n    \"network-connections\": {\n     \"network-connection\": {\n      \"index\": \"2000\",\n      \"subunit\": \"1000\",\n      \"parent-interface\": \"string-1\",\n      \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n      \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n      \"ipaddress\": \"192.168.0.15\",\n      \"mask\": \"192.168.0.15\",\n      \"gateway\": \"192.168.0.15\",\n      \"external-ipaddress\": \"10.0.0.44\",\n      \"isconnected\": \"true\",\n      \"ipaddress-allocation-mode\": \"string-5\",\n      \"ipaddress-allocation-mode-v6\": \"string-3\",\n      \"network\": \"string-3\",\n      \"parent-network\": \"string-5\",\n      \"connected-external-network\": \"string-5\",\n      \"primary\": \"true\",\n      \"network-type\": \"preconfigured\",\n      \"network-type-val\": \"string-2\",\n      \"vxlan\": \"300\",\n      \"routing-instance\": \"string-3\"\n     }\n    },\n    \"slot\": \"3\",\n    \"region\": \"string-3\",\n    \"vmid\": \"string-4\",\n    \"create-source\": \"string-5\",\n    \"software-details\": {\n     \"software-version\": \"string-2\",\n     \"current-upgrade-status\": \"completed\",\n     \"last-upgrade-status\": \"success\",\n     \"package-id\": \"string-3\"\n    },\n    \"num-cpus\": \"2\",\n    \"memory-size\": \"1000\",\n    \"num-nics\": \"6\",\n    \"resources\": {\n     \"resource\": {\n      \"name\": \"string-5\",\n      \"resource-type\": \"type1\",\n      \"resource-info\": \"string-3\"\n     }\n    },\n    \"orgs\": {\n     \"uuid\": \"\",\n     \"network-connections\": {\n      \"network-connection\": {\n       \"index\": \"1000\",\n       \"subunit\": \"3000\",\n       \"parent-interface\": \"string-3\",\n       \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n       \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n       \"ipaddress\": \"192.168.0.15\",\n       \"mask\": \"192.168.0.15\",\n       \"gateway\": \"10.0.0.44\",\n       \"external-ipaddress\": \"192.168.0.15\",\n       \"isconnected\": \"false\",\n       \"ipaddress-allocation-mode\": \"string-3\",\n       \"ipaddress-allocation-mode-v6\": \"string-4\",\n       \"network\": \"string-2\",\n       \"parent-network\": \"string-2\",\n       \"connected-external-network\": \"string-3\",\n       \"primary\": \"false\",\n       \"network-type\": \"preconfigured\",\n       \"network-type-val\": \"string-2\",\n       \"vxlan\": \"700\",\n       \"routing-instance\": \"string-5\"\n      }\n     }\n    }\n   }\n  },\n  \"org\": \"\",\n  \"cmsorg\": \"string-5\",\n  \"orgvdc\": \"string-1\",\n  \"connector\": \"string-1\",\n  \"vapptemplateid\": \"string-2\",\n  \"session-statistics\": {\n   \"session-count\": \"300\",\n   \"session-created\": \"600\",\n   \"session-closed\": \"400\",\n   \"capacity\": \"1.5\"\n  },\n  \"policies\": {\n   \"heal-policy\": {\n    \"action\": {\n     \"heal-operation-enabled\": \"state1\"\n    }\n   }\n  },\n  \"status\": {\n   \"name\": \"string-1\",\n   \"last-updated-time\": \"string-5\",\n   \"overall-status\": \"string-4\",\n   \"sync-status\": \"string-5\",\n   \"ping-status\": \"string-3\",\n   \"services-status\": \"string-1\",\n   \"branch-maintenance-mode\": \"true\",\n   \"branch-maintenance-mode-ip\": \"string-2\",\n   \"intra-chassis-ha-status\": {\n    \"vcsn-nodes\": {\n     \"vcsn-node\": {\n      \"vm-name\": \"string-3\",\n      \"slot-number\": \"100\",\n      \"role\": \"string-3\"\n     }\n    }\n   },\n   \"nodes\": {\n    \"node\": {\n     \"slot-id\": \"string-4\",\n     \"vm-name\": \"string-2\",\n     \"vm-status\": \"string-2\",\n     \"host-ip\": \"string-4\",\n     \"node-type\": \"string-3\",\n     \"cpu-load\": \"string-3\",\n     \"memory-load\": \"string-5\",\n     \"load-factor\": \"string-3\"\n    }\n   },\n   \"ucpe-nodes\": {\n    \"node\": {\n     \"uuid\": \"string-3\",\n     \"name\": \"string-3\",\n     \"status\": \"string-1\",\n     \"cpu-load\": \"string-3\",\n     \"memory-load\": \"string-5\",\n     \"disk-load\": \"string-1\"\n    }\n   }\n  },\n  \"ucpe-nodes\": {\n   \"node\": {\n    \"uuid\": \"string-4\",\n    \"name\": \"string-2\",\n    \"vendor\": \"string-5\",\n    \"ip-address\": \"hostname\",\n    \"version\": \"string-2\",\n    \"created-at\": \"2014-10-17T14:00:00-05:00\",\n    \"creation-status\": \"false\"\n   }\n  }\n }\n}",
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
    "version": "16.1.2",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha",
    "title": "Edit availability-zones object",
    "version": "16.1.2",
    "name": "editAvailabilityZones",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"availability-zones\": {\n  \"active-availability-zone\": \"string-4\",\n  \"stand-by-availability-zone\": \"string-4\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/subscription/custom-param/<NAME>",
    "title": "Edit custom-param object",
    "version": "16.1.2",
    "name": "editCustomParam",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"custom-param\": {\n  \"name\": \"string-5\",\n  \"value\": \"string-5\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>/subscription/custom-param/<NAME>",
    "title": "Edit custom-param object",
    "version": "16.1.2",
    "name": "editCustomParam",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"custom-param\": {\n  \"name\": \"string-2\",\n  \"value\": \"string-4\"\n }\n}",
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
    "version": "16.1.2",
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
          "content": "{\n \"file\": {\n  \"file-name\": \"string-2\",\n  \"device-name\": \"string-4\",\n  \"size\": \"600\",\n  \"creation-time\": \"2014-10-17T14:00:00-05:00\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha",
    "title": "Edit master-ip-addresses object",
    "version": "16.1.2",
    "name": "editMasterIpAddresses",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"master-ip-addresses\": {\n  \"mgmt-internal-master-ip\": \"192.168.0.15\",\n  \"mgmt-external-master-ip\": \"10.0.0.44\",\n  \"mgmt-internal-address-range-name\": \"string-2\",\n  \"mgmt-external-address-range-name\": \"string-2\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Edit network-connection object",
    "version": "16.1.2",
    "name": "editNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"2000\",\n  \"subunit\": \"4000\",\n  \"parent-interface\": \"string-3\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"192.168.0.15\",\n  \"mask\": \"10.0.0.44\",\n  \"gateway\": \"10.0.0.44\",\n  \"external-ipaddress\": \"10.0.0.44\",\n  \"isconnected\": \"true\",\n  \"ipaddress-allocation-mode\": \"string-3\",\n  \"ipaddress-allocation-mode-v6\": \"string-3\",\n  \"network\": \"string-4\",\n  \"parent-network\": \"string-1\",\n  \"connected-external-network\": \"string-1\",\n  \"primary\": \"true\",\n  \"network-type\": \"data-external\",\n  \"network-type-val\": \"string-2\",\n  \"vxlan\": \"300\",\n  \"routing-instance\": \"string-3\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/orgs/<UUID>/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Edit network-connection object",
    "version": "16.1.2",
    "name": "editNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"1000\",\n  \"subunit\": \"3000\",\n  \"parent-interface\": \"string-3\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"192.168.0.15\",\n  \"mask\": \"192.168.0.15\",\n  \"gateway\": \"10.0.0.44\",\n  \"external-ipaddress\": \"192.168.0.15\",\n  \"isconnected\": \"false\",\n  \"ipaddress-allocation-mode\": \"string-3\",\n  \"ipaddress-allocation-mode-v6\": \"string-4\",\n  \"network\": \"string-2\",\n  \"parent-network\": \"string-2\",\n  \"connected-external-network\": \"string-3\",\n  \"primary\": \"false\",\n  \"network-type\": \"preconfigured\",\n  \"network-type-val\": \"string-2\",\n  \"vxlan\": \"700\",\n  \"routing-instance\": \"string-5\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Edit network-connection object",
    "version": "16.1.2",
    "name": "editNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"2000\",\n  \"subunit\": \"1000\",\n  \"parent-interface\": \"string-1\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"192.168.0.15\",\n  \"mask\": \"192.168.0.15\",\n  \"gateway\": \"192.168.0.15\",\n  \"external-ipaddress\": \"10.0.0.44\",\n  \"isconnected\": \"true\",\n  \"ipaddress-allocation-mode\": \"string-5\",\n  \"ipaddress-allocation-mode-v6\": \"string-3\",\n  \"network\": \"string-3\",\n  \"parent-network\": \"string-5\",\n  \"connected-external-network\": \"string-5\",\n  \"primary\": \"true\",\n  \"network-type\": \"preconfigured\",\n  \"network-type-val\": \"string-2\",\n  \"vxlan\": \"300\",\n  \"routing-instance\": \"string-3\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Edit network-connection object",
    "version": "16.1.2",
    "name": "editNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"3000\",\n  \"subunit\": \"4000\",\n  \"parent-interface\": \"string-4\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"10.0.0.44\",\n  \"mask\": \"192.168.0.15\",\n  \"gateway\": \"10.0.0.44\",\n  \"external-ipaddress\": \"10.0.0.44\",\n  \"isconnected\": \"false\",\n  \"ipaddress-allocation-mode\": \"string-1\",\n  \"ipaddress-allocation-mode-v6\": \"string-5\",\n  \"network\": \"string-3\",\n  \"parent-network\": \"string-5\",\n  \"connected-external-network\": \"string-2\",\n  \"primary\": \"true\",\n  \"network-type\": \"data-external\",\n  \"network-type-val\": \"string-3\",\n  \"vxlan\": \"500\",\n  \"routing-instance\": \"string-5\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/network-connections/network-connection/<NIC-SLOT-NUMBER>/<SUBUNIT>/<PARENT-INTERFACE>",
    "title": "Edit network-connection object",
    "version": "16.1.2",
    "name": "editNetworkConnection",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Parent-Interface",
            "description": "<p>Parent Interface</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subunit",
            "description": "<p>subunit</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NIC-Slot-Number",
            "description": "<p>NIC Slot Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"network-connection\": {\n  \"index\": \"1000\",\n  \"subunit\": \"2000\",\n  \"parent-interface\": \"string-5\",\n  \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n  \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n  \"ipaddress\": \"192.168.0.15\",\n  \"mask\": \"10.0.0.44\",\n  \"gateway\": \"192.168.0.15\",\n  \"external-ipaddress\": \"192.168.0.15\",\n  \"isconnected\": \"false\",\n  \"ipaddress-allocation-mode\": \"string-2\",\n  \"ipaddress-allocation-mode-v6\": \"string-4\",\n  \"network\": \"string-2\",\n  \"parent-network\": \"string-3\",\n  \"connected-external-network\": \"string-5\",\n  \"primary\": \"true\",\n  \"network-type\": \"none\",\n  \"network-type-val\": \"string-4\",\n  \"vxlan\": \"500\",\n  \"routing-instance\": \"string-3\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/ucpe-nodes/node/<UNIQUE-UUID-OF-THE-THIRD-PARTY-VNF>",
    "title": "Edit node object",
    "version": "16.1.2",
    "name": "editNode",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unique-uuid-of-the-third-party-vnf",
            "description": "<p>unique uuid of the third party vnf</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"node\": {\n  \"uuid\": \"string-4\",\n  \"name\": \"string-2\",\n  \"vendor\": \"string-5\",\n  \"ip-address\": \"hostname\",\n  \"version\": \"string-2\",\n  \"created-at\": \"2014-10-17T14:00:00-05:00\",\n  \"creation-status\": \"false\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/orgs/<UUID>",
    "title": "Edit orgs object",
    "version": "16.1.2",
    "name": "editOrgs",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"orgs\": {\n  \"uuid\": \"\",\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"1000\",\n    \"subunit\": \"3000\",\n    \"parent-interface\": \"string-3\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"192.168.0.15\",\n    \"mask\": \"192.168.0.15\",\n    \"gateway\": \"10.0.0.44\",\n    \"external-ipaddress\": \"192.168.0.15\",\n    \"isconnected\": \"false\",\n    \"ipaddress-allocation-mode\": \"string-3\",\n    \"ipaddress-allocation-mode-v6\": \"string-4\",\n    \"network\": \"string-2\",\n    \"parent-network\": \"string-2\",\n    \"connected-external-network\": \"string-3\",\n    \"primary\": \"false\",\n    \"network-type\": \"preconfigured\",\n    \"network-type-val\": \"string-2\",\n    \"vxlan\": \"700\",\n    \"routing-instance\": \"string-5\"\n   }\n  }\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>",
    "title": "Edit orgs object",
    "version": "16.1.2",
    "name": "editOrgs",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"orgs\": {\n  \"uuid\": \"\",\n  \"services\": [ \"string-1\" ],\n  \"available-routing-instances\": [ \"string-2\" ],\n  \"available-provider-orgs\": [ \"string-1\" ],\n  \"available-service-node-groups\": [ \"string-4\" ],\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"2000\",\n    \"subunit\": \"4000\",\n    \"parent-interface\": \"string-3\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"192.168.0.15\",\n    \"mask\": \"10.0.0.44\",\n    \"gateway\": \"10.0.0.44\",\n    \"external-ipaddress\": \"10.0.0.44\",\n    \"isconnected\": \"true\",\n    \"ipaddress-allocation-mode\": \"string-3\",\n    \"ipaddress-allocation-mode-v6\": \"string-3\",\n    \"network\": \"string-4\",\n    \"parent-network\": \"string-1\",\n    \"connected-external-network\": \"string-1\",\n    \"primary\": \"true\",\n    \"network-type\": \"data-external\",\n    \"network-type-val\": \"string-2\",\n    \"vxlan\": \"300\",\n    \"routing-instance\": \"string-3\"\n   }\n  },\n  \"subscription\": {\n   \"solution-tier\": \"value123\",\n   \"bandwidth\": \"value123\",\n   \"state\": \"value123\",\n   \"created-at\": \"2014-10-17T14:00:00-05:00\",\n   \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n   \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n   \"is-analytics-enabled\": \"false\",\n   \"custom-param\": {\n    \"name\": \"string-2\",\n    \"value\": \"string-4\"\n   }\n  }\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/resources/resource/<NAME>",
    "title": "Edit resource object",
    "version": "16.1.2",
    "name": "editResource",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"resource\": {\n  \"name\": \"string-5\",\n  \"resource-type\": \"type1\",\n  \"resource-info\": \"string-3\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/resources/resource/<NAME>",
    "title": "Edit resource object",
    "version": "16.1.2",
    "name": "editResource",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"resource\": {\n  \"name\": \"string-5\",\n  \"resource-type\": \"type1\",\n  \"resource-info\": \"string-2\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/resources/resource/<NAME>",
    "title": "Edit resource object",
    "version": "16.1.2",
    "name": "editResource",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"resource\": {\n  \"name\": \"string-2\",\n  \"resource-type\": \"type1\",\n  \"resource-info\": \"string-2\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/sngs/sng/<NAME>",
    "title": "Edit sng object",
    "version": "16.1.2",
    "name": "editSng",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"sng\": {\n  \"name\": \"string-1\",\n  \"id\": \"2\",\n  \"flavor\": \"string-4\",\n  \"services\": [ \"string-2\" ],\n  \"isPartOfVCSN\": \"string-5\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha",
    "title": "Edit stand-by-vcsn object",
    "version": "16.1.2",
    "name": "editStandByVcsn",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"stand-by-vcsn\": {\n  \"uuid\": \"string-5\",\n  \"wan-ip-list\": [ \"string-2\" ],\n  \"ip-address\": \"hostname\",\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"1000\",\n    \"subunit\": \"2000\",\n    \"parent-interface\": \"string-5\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"192.168.0.15\",\n    \"mask\": \"10.0.0.44\",\n    \"gateway\": \"192.168.0.15\",\n    \"external-ipaddress\": \"192.168.0.15\",\n    \"isconnected\": \"false\",\n    \"ipaddress-allocation-mode\": \"string-2\",\n    \"ipaddress-allocation-mode-v6\": \"string-4\",\n    \"network\": \"string-2\",\n    \"parent-network\": \"string-3\",\n    \"connected-external-network\": \"string-5\",\n    \"primary\": \"true\",\n    \"network-type\": \"none\",\n    \"network-type-val\": \"string-4\",\n    \"vxlan\": \"500\",\n    \"routing-instance\": \"string-3\"\n   }\n  },\n  \"slot\": \"1\",\n  \"region\": \"string-5\",\n  \"vmid\": \"string-5\",\n  \"create-source\": \"string-2\",\n  \"software-details\": {\n   \"software-version\": \"string-3\",\n   \"current-upgrade-status\": \"completed\",\n   \"last-upgrade-status\": \"success\",\n   \"package-id\": \"string-3\"\n  },\n  \"num-cpus\": \"4\",\n  \"memory-size\": \"5000\",\n  \"num-nics\": \"2\",\n  \"resources\": {\n   \"resource\": {\n    \"name\": \"string-2\",\n    \"resource-type\": \"type1\",\n    \"resource-info\": \"string-2\"\n   }\n  }\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/users/user/<USER-NAME>",
    "title": "Edit user object",
    "version": "16.1.2",
    "name": "editUser",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user-name",
            "description": "<p>user name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"user\": {\n  \"name\": \"string-5\",\n  \"password\": \"password\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha",
    "title": "Edit vcsn-ip-addresses object",
    "version": "16.1.2",
    "name": "editVcsnIpAddresses",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"vcsn-ip-addresses\": {\n  \"active-vcsn-ipaddress\": \"10.0.0.44\",\n  \"stand-by-vcsn-ip-address\": \"10.0.0.44\"\n }\n}",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>",
    "title": "Edit vsn object",
    "version": "16.1.2",
    "name": "editVsn",
    "group": "VD_Appliances_Management",
    "success": {
      "examples": [
        {
          "title": "Request-XML/json:",
          "content": "{\n \"vsn\": {\n  \"uuid\": \"string-1\",\n  \"wan-ip-list\": [ \"string-1\" ],\n  \"ip-address\": \"hostname\",\n  \"network-connections\": {\n   \"network-connection\": {\n    \"index\": \"2000\",\n    \"subunit\": \"1000\",\n    \"parent-interface\": \"string-1\",\n    \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n    \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n    \"ipaddress\": \"192.168.0.15\",\n    \"mask\": \"192.168.0.15\",\n    \"gateway\": \"192.168.0.15\",\n    \"external-ipaddress\": \"10.0.0.44\",\n    \"isconnected\": \"true\",\n    \"ipaddress-allocation-mode\": \"string-5\",\n    \"ipaddress-allocation-mode-v6\": \"string-3\",\n    \"network\": \"string-3\",\n    \"parent-network\": \"string-5\",\n    \"connected-external-network\": \"string-5\",\n    \"primary\": \"true\",\n    \"network-type\": \"preconfigured\",\n    \"network-type-val\": \"string-2\",\n    \"vxlan\": \"300\",\n    \"routing-instance\": \"string-3\"\n   }\n  },\n  \"slot\": \"3\",\n  \"region\": \"string-3\",\n  \"vmid\": \"string-4\",\n  \"create-source\": \"string-5\",\n  \"software-details\": {\n   \"software-version\": \"string-2\",\n   \"current-upgrade-status\": \"completed\",\n   \"last-upgrade-status\": \"success\",\n   \"package-id\": \"string-3\"\n  },\n  \"num-cpus\": \"2\",\n  \"memory-size\": \"1000\",\n  \"num-nics\": \"6\",\n  \"resources\": {\n   \"resource\": {\n    \"name\": \"string-5\",\n    \"resource-type\": \"type1\",\n    \"resource-info\": \"string-3\"\n   }\n  },\n  \"orgs\": {\n   \"uuid\": \"\",\n   \"network-connections\": {\n    \"network-connection\": {\n     \"index\": \"1000\",\n     \"subunit\": \"3000\",\n     \"parent-interface\": \"string-3\",\n     \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n     \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n     \"ipaddress\": \"192.168.0.15\",\n     \"mask\": \"192.168.0.15\",\n     \"gateway\": \"10.0.0.44\",\n     \"external-ipaddress\": \"192.168.0.15\",\n     \"isconnected\": \"false\",\n     \"ipaddress-allocation-mode\": \"string-3\",\n     \"ipaddress-allocation-mode-v6\": \"string-4\",\n     \"network\": \"string-2\",\n     \"parent-network\": \"string-2\",\n     \"connected-external-network\": \"string-3\",\n     \"primary\": \"false\",\n     \"network-type\": \"preconfigured\",\n     \"network-type-val\": \"string-2\",\n     \"vxlan\": \"700\",\n     \"routing-instance\": \"string-5\"\n    }\n   }\n  }\n }\n}",
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
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance",
    "title": "Get list of appliance objects",
    "version": "16.1.2",
    "name": "getApplianceList",
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
          "content": "         Status: 200 OK\n{\n          \"appliance\": {\n           \"name\": \"value123\",\n           \"type\": \"vmware\",\n           \"sub-type\": \"value123\",\n           \"branch-list\": [ \"value1\" ],\n           \"staging-controller\": \"false\",\n           \"post-staging-controller\": \"false\",\n           \"sync-from-needed\": \"true\",\n           \"controller-list\": [ \"string-4\" ],\n           \"remote-uuid\": \"string-5\",\n           \"id\": \"50\",\n           \"userlabel\": \"string-4\",\n           \"created-at\": \"2014-10-17T14:00:00-05:00\",\n           \"created-by\": \"string-4\",\n           \"creation-status\": \"false\",\n           \"ztp-stage\": \"string-1\",\n           \"traffic-mode\": \"string-1\",\n           \"branch-id\": \"50\",\n           \"ha-paired-appliance-name\": \"string-3\",\n           \"vsg-id\": \"30\",\n           \"users\": {\n            \"user\": {\n             \"name\": \"string-5\",\n             \"password\": \"password\"\n            }\n           },\n           \"subscription\": {\n            \"solution-tier\": \"value123\",\n            \"bandwidth\": \"value123\",\n            \"state\": \"value123\",\n            \"created-at\": \"2014-10-17T14:00:00-05:00\",\n            \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n            \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n            \"rmaed-at\": \"2014-10-17T14:00:00-05:00\",\n            \"is-analytics-enabled\": \"true\",\n            \"is-primary\": \"false\",\n            \"custom-param\": {\n             \"name\": \"string-5\",\n             \"value\": \"string-5\"\n            }\n           },\n           \"sngs\": {\n            \"vcsnflavor\": \"string-1\",\n            \"sng\": {\n             \"name\": \"string-1\",\n             \"id\": \"2\",\n             \"flavor\": \"string-4\",\n             \"services\": [ \"string-5\" ],\n             \"isPartOfVCSN\": \"string-5\"\n            }\n           },\n           \"data-external-networks\": [ \"string-3\" ],\n           \"nfv-type\": \"string-3\",\n           \"node-type\": \"string-2\",\n           \"isprimaryvapp\": \"true\",\n           \"vappid\": \"string-3\",\n           \"security-group\": \"string-3\",\n           \"nco\": \"string-2\",\n           \"max-vsns\": \"1\",\n           \"site\": \"\",\n           \"uuid\": \"string-3\",\n           \"wan-ip-list\": [ \"string-4\" ],\n           \"ip-address\": \"hostname\",\n           \"network-connections\": {\n            \"network-connection\": {\n             \"index\": \"3000\",\n             \"subunit\": \"4000\",\n             \"parent-interface\": \"string-4\",\n             \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n             \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n             \"ipaddress\": \"10.0.0.44\",\n             \"mask\": \"192.168.0.15\",\n             \"gateway\": \"10.0.0.44\",\n             \"external-ipaddress\": \"10.0.0.44\",\n             \"isconnected\": \"false\",\n             \"ipaddress-allocation-mode\": \"string-1\",\n             \"ipaddress-allocation-mode-v6\": \"string-5\",\n             \"network\": \"string-3\",\n             \"parent-network\": \"string-5\",\n             \"connected-external-network\": \"string-2\",\n             \"primary\": \"true\",\n             \"network-type\": \"data-external\",\n             \"network-type-val\": \"string-3\",\n             \"vxlan\": \"500\",\n             \"routing-instance\": \"string-5\"\n            }\n           },\n           \"slot\": \"4\",\n           \"region\": \"string-1\",\n           \"vmid\": \"string-1\",\n           \"create-source\": \"string-5\",\n           \"software-details\": {\n            \"software-version\": \"string-1\",\n            \"current-upgrade-status\": \"completed\",\n            \"last-upgrade-status\": \"success\",\n            \"package-id\": \"string-4\"\n           },\n           \"num-cpus\": \"2\",\n           \"memory-size\": \"6000\",\n           \"num-nics\": \"3\",\n           \"resources\": {\n            \"resource\": {\n             \"name\": \"string-5\",\n             \"resource-type\": \"type1\",\n             \"resource-info\": \"string-2\"\n            }\n           },\n           \"intra-chassis-ha\": {\n            \"enabled\": \"false\",\n            \"stand-by-vcsn\": {\n             \"uuid\": \"string-5\",\n             \"wan-ip-list\": [ \"string-2\" ],\n             \"ip-address\": \"hostname\",\n             \"network-connections\": {\n              \"network-connection\": {\n               \"index\": \"1000\",\n               \"subunit\": \"2000\",\n               \"parent-interface\": \"string-5\",\n               \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n               \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n               \"ipaddress\": \"192.168.0.15\",\n               \"mask\": \"10.0.0.44\",\n               \"gateway\": \"192.168.0.15\",\n               \"external-ipaddress\": \"192.168.0.15\",\n               \"isconnected\": \"false\",\n               \"ipaddress-allocation-mode\": \"string-2\",\n               \"ipaddress-allocation-mode-v6\": \"string-4\",\n               \"network\": \"string-2\",\n               \"parent-network\": \"string-3\",\n               \"connected-external-network\": \"string-5\",\n               \"primary\": \"true\",\n               \"network-type\": \"none\",\n               \"network-type-val\": \"string-4\",\n               \"vxlan\": \"500\",\n               \"routing-instance\": \"string-3\"\n              }\n             },\n             \"slot\": \"1\",\n             \"region\": \"string-5\",\n             \"vmid\": \"string-5\",\n             \"create-source\": \"string-2\",\n             \"software-details\": {\n              \"software-version\": \"string-3\",\n              \"current-upgrade-status\": \"completed\",\n              \"last-upgrade-status\": \"success\",\n              \"package-id\": \"string-3\"\n             },\n             \"num-cpus\": \"4\",\n             \"memory-size\": \"5000\",\n             \"num-nics\": \"2\",\n             \"resources\": {\n              \"resource\": {\n               \"name\": \"string-2\",\n               \"resource-type\": \"type1\",\n               \"resource-info\": \"string-2\"\n              }\n             }\n            },\n            \"vcsn-ip-addresses\": {\n             \"active-vcsn-ipaddress\": \"10.0.0.44\",\n             \"stand-by-vcsn-ip-address\": \"10.0.0.44\"\n            },\n            \"master-ip-addresses\": {\n             \"mgmt-internal-master-ip\": \"192.168.0.15\",\n             \"mgmt-external-master-ip\": \"10.0.0.44\",\n             \"mgmt-internal-address-range-name\": \"string-2\",\n             \"mgmt-external-address-range-name\": \"string-2\"\n            },\n            \"availability-zones\": {\n             \"active-availability-zone\": \"string-4\",\n             \"stand-by-availability-zone\": \"string-4\"\n            }\n           },\n           \"orgs\": {\n            \"uuid\": \"\",\n            \"services\": [ \"string-2\" ],\n            \"available-routing-instances\": [ \"string-2\" ],\n            \"available-provider-orgs\": [ \"string-5\" ],\n            \"available-service-node-groups\": [ \"string-1\" ],\n            \"network-connections\": {\n             \"network-connection\": {\n              \"index\": \"2000\",\n              \"subunit\": \"4000\",\n              \"parent-interface\": \"string-3\",\n              \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n              \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n              \"ipaddress\": \"192.168.0.15\",\n              \"mask\": \"10.0.0.44\",\n              \"gateway\": \"10.0.0.44\",\n              \"external-ipaddress\": \"10.0.0.44\",\n              \"isconnected\": \"true\",\n              \"ipaddress-allocation-mode\": \"string-3\",\n              \"ipaddress-allocation-mode-v6\": \"string-3\",\n              \"network\": \"string-4\",\n              \"parent-network\": \"string-1\",\n              \"connected-external-network\": \"string-1\",\n              \"primary\": \"true\",\n              \"network-type\": \"data-external\",\n              \"network-type-val\": \"string-2\",\n              \"vxlan\": \"300\",\n              \"routing-instance\": \"string-3\"\n             }\n            },\n            \"subscription\": {\n             \"solution-tier\": \"value123\",\n             \"bandwidth\": \"value123\",\n             \"state\": \"value123\",\n             \"created-at\": \"2014-10-17T14:00:00-05:00\",\n             \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n             \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n             \"is-analytics-enabled\": \"false\",\n             \"custom-param\": {\n              \"name\": \"string-2\",\n              \"value\": \"string-4\"\n             }\n            }\n           },\n           \"vsns\": {\n            \"vsn\": {\n             \"uuid\": \"string-1\",\n             \"wan-ip-list\": [ \"string-2\" ],\n             \"ip-address\": \"hostname\",\n             \"network-connections\": {\n              \"network-connection\": {\n               \"index\": \"2000\",\n               \"subunit\": \"1000\",\n               \"parent-interface\": \"string-1\",\n               \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n               \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n               \"ipaddress\": \"192.168.0.15\",\n               \"mask\": \"192.168.0.15\",\n               \"gateway\": \"192.168.0.15\",\n               \"external-ipaddress\": \"10.0.0.44\",\n               \"isconnected\": \"true\",\n               \"ipaddress-allocation-mode\": \"string-5\",\n               \"ipaddress-allocation-mode-v6\": \"string-3\",\n               \"network\": \"string-3\",\n               \"parent-network\": \"string-5\",\n               \"connected-external-network\": \"string-5\",\n               \"primary\": \"true\",\n               \"network-type\": \"preconfigured\",\n               \"network-type-val\": \"string-2\",\n               \"vxlan\": \"300\",\n               \"routing-instance\": \"string-3\"\n              }\n             },\n             \"slot\": \"3\",\n             \"region\": \"string-3\",\n             \"vmid\": \"string-4\",\n             \"create-source\": \"string-5\",\n             \"software-details\": {\n              \"software-version\": \"string-2\",\n              \"current-upgrade-status\": \"completed\",\n              \"last-upgrade-status\": \"success\",\n              \"package-id\": \"string-3\"\n             },\n             \"num-cpus\": \"2\",\n             \"memory-size\": \"1000\",\n             \"num-nics\": \"6\",\n             \"resources\": {\n              \"resource\": {\n               \"name\": \"string-5\",\n               \"resource-type\": \"type1\",\n               \"resource-info\": \"string-3\"\n              }\n             },\n             \"orgs\": {\n              \"uuid\": \"\",\n              \"network-connections\": {\n               \"network-connection\": {\n                \"index\": \"1000\",\n                \"subunit\": \"3000\",\n                \"parent-interface\": \"string-3\",\n                \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n                \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n                \"ipaddress\": \"192.168.0.15\",\n                \"mask\": \"192.168.0.15\",\n                \"gateway\": \"10.0.0.44\",\n                \"external-ipaddress\": \"192.168.0.15\",\n                \"isconnected\": \"false\",\n                \"ipaddress-allocation-mode\": \"string-3\",\n                \"ipaddress-allocation-mode-v6\": \"string-4\",\n                \"network\": \"string-2\",\n                \"parent-network\": \"string-2\",\n                \"connected-external-network\": \"string-3\",\n                \"primary\": \"false\",\n                \"network-type\": \"preconfigured\",\n                \"network-type-val\": \"string-2\",\n                \"vxlan\": \"700\",\n                \"routing-instance\": \"string-5\"\n               }\n              }\n             }\n            }\n           },\n           \"org\": \"\",\n           \"cmsorg\": \"string-5\",\n           \"orgvdc\": \"string-1\",\n           \"connector\": \"string-1\",\n           \"vapptemplateid\": \"string-2\",\n           \"session-statistics\": {\n            \"session-count\": \"300\",\n            \"session-created\": \"600\",\n            \"session-closed\": \"400\",\n            \"capacity\": \"1.5\"\n           },\n           \"policies\": {\n            \"heal-policy\": {\n             \"action\": {\n              \"heal-operation-enabled\": \"state1\"\n             }\n            }\n           },\n           \"status\": {\n            \"name\": \"string-1\",\n            \"last-updated-time\": \"string-5\",\n            \"overall-status\": \"string-4\",\n            \"sync-status\": \"string-5\",\n            \"ping-status\": \"string-3\",\n            \"services-status\": \"string-1\",\n            \"branch-maintenance-mode\": \"true\",\n            \"branch-maintenance-mode-ip\": \"string-2\",\n            \"intra-chassis-ha-status\": {\n             \"vcsn-nodes\": {\n              \"vcsn-node\": {\n               \"vm-name\": \"string-3\",\n               \"slot-number\": \"100\",\n               \"role\": \"string-3\"\n              }\n             }\n            },\n            \"nodes\": {\n             \"node\": {\n              \"slot-id\": \"string-4\",\n              \"vm-name\": \"string-2\",\n              \"vm-status\": \"string-2\",\n              \"host-ip\": \"string-4\",\n              \"node-type\": \"string-3\",\n              \"cpu-load\": \"string-3\",\n              \"memory-load\": \"string-5\",\n              \"load-factor\": \"string-3\"\n             }\n            },\n            \"ucpe-nodes\": {\n             \"node\": {\n              \"uuid\": \"string-3\",\n              \"name\": \"string-3\",\n              \"status\": \"string-1\",\n              \"cpu-load\": \"string-3\",\n              \"memory-load\": \"string-5\",\n              \"disk-load\": \"string-1\"\n             }\n            }\n           },\n           \"ucpe-nodes\": {\n            \"node\": {\n             \"uuid\": \"string-4\",\n             \"name\": \"string-2\",\n             \"vendor\": \"string-5\",\n             \"ip-address\": \"hostname\",\n             \"version\": \"string-2\",\n             \"created-at\": \"2014-10-17T14:00:00-05:00\",\n             \"creation-status\": \"false\"\n            }\n           }\n          }\n         }",
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
    "version": "16.1.2",
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
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/availability-zones",
    "title": "Get list of availability-zones objects",
    "version": "16.1.2",
    "name": "getAvailabilityZonesList",
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
          "content": "         Status: 200 OK\n{\n          \"availability-zones\": {\n           \"active-availability-zone\": \"string-4\",\n           \"stand-by-availability-zone\": \"string-4\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/subscription/custom-param",
    "title": "Get list of custom-param objects",
    "version": "16.1.2",
    "name": "getCustomParamList",
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
          "content": "         Status: 200 OK\n{\n          \"custom-param\": {\n           \"name\": \"string-5\",\n           \"value\": \"string-5\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>/subscription/custom-param",
    "title": "Get list of custom-param objects",
    "version": "16.1.2",
    "name": "getCustomParamList",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
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
          "content": "         Status: 200 OK\n{\n          \"custom-param\": {\n           \"name\": \"string-2\",\n           \"value\": \"string-4\"\n          }\n         }",
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
    "version": "16.1.2",
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
          "content": "         Status: 200 OK\n{\n          \"file\": {\n           \"file-name\": \"string-2\",\n           \"device-name\": \"string-4\",\n           \"size\": \"600\",\n           \"creation-time\": \"2014-10-17T14:00:00-05:00\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/master-ip-addresses",
    "title": "Get list of master-ip-addresses objects",
    "version": "16.1.2",
    "name": "getMasterIpAddressesList",
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
          "content": "         Status: 200 OK\n{\n          \"master-ip-addresses\": {\n           \"mgmt-internal-master-ip\": \"192.168.0.15\",\n           \"mgmt-external-master-ip\": \"10.0.0.44\",\n           \"mgmt-internal-address-range-name\": \"string-2\",\n           \"mgmt-external-address-range-name\": \"string-2\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs/<UUID>/network-connections/network-connection",
    "title": "Get list of network-connection objects",
    "version": "16.1.2",
    "name": "getNetworkConnectionList",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
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
          "content": "         Status: 200 OK\n{\n          \"network-connection\": {\n           \"index\": \"2000\",\n           \"subunit\": \"4000\",\n           \"parent-interface\": \"string-3\",\n           \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n           \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n           \"ipaddress\": \"192.168.0.15\",\n           \"mask\": \"10.0.0.44\",\n           \"gateway\": \"10.0.0.44\",\n           \"external-ipaddress\": \"10.0.0.44\",\n           \"isconnected\": \"true\",\n           \"ipaddress-allocation-mode\": \"string-3\",\n           \"ipaddress-allocation-mode-v6\": \"string-3\",\n           \"network\": \"string-4\",\n           \"parent-network\": \"string-1\",\n           \"connected-external-network\": \"string-1\",\n           \"primary\": \"true\",\n           \"network-type\": \"data-external\",\n           \"network-type-val\": \"string-2\",\n           \"vxlan\": \"300\",\n           \"routing-instance\": \"string-3\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/network-connections/network-connection",
    "title": "Get list of network-connection objects",
    "version": "16.1.2",
    "name": "getNetworkConnectionList",
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
          "content": "         Status: 200 OK\n{\n          \"network-connection\": {\n           \"index\": \"2000\",\n           \"subunit\": \"1000\",\n           \"parent-interface\": \"string-1\",\n           \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n           \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n           \"ipaddress\": \"192.168.0.15\",\n           \"mask\": \"192.168.0.15\",\n           \"gateway\": \"192.168.0.15\",\n           \"external-ipaddress\": \"10.0.0.44\",\n           \"isconnected\": \"true\",\n           \"ipaddress-allocation-mode\": \"string-5\",\n           \"ipaddress-allocation-mode-v6\": \"string-3\",\n           \"network\": \"string-3\",\n           \"parent-network\": \"string-5\",\n           \"connected-external-network\": \"string-5\",\n           \"primary\": \"true\",\n           \"network-type\": \"preconfigured\",\n           \"network-type-val\": \"string-2\",\n           \"vxlan\": \"300\",\n           \"routing-instance\": \"string-3\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/network-connections/network-connection",
    "title": "Get list of network-connection objects",
    "version": "16.1.2",
    "name": "getNetworkConnectionList",
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
          "content": "         Status: 200 OK\n{\n          \"network-connection\": {\n           \"index\": \"1000\",\n           \"subunit\": \"2000\",\n           \"parent-interface\": \"string-5\",\n           \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n           \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n           \"ipaddress\": \"192.168.0.15\",\n           \"mask\": \"10.0.0.44\",\n           \"gateway\": \"192.168.0.15\",\n           \"external-ipaddress\": \"192.168.0.15\",\n           \"isconnected\": \"false\",\n           \"ipaddress-allocation-mode\": \"string-2\",\n           \"ipaddress-allocation-mode-v6\": \"string-4\",\n           \"network\": \"string-2\",\n           \"parent-network\": \"string-3\",\n           \"connected-external-network\": \"string-5\",\n           \"primary\": \"true\",\n           \"network-type\": \"none\",\n           \"network-type-val\": \"string-4\",\n           \"vxlan\": \"500\",\n           \"routing-instance\": \"string-3\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/network-connections/network-connection",
    "title": "Get list of network-connection objects",
    "version": "16.1.2",
    "name": "getNetworkConnectionList",
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
          "content": "         Status: 200 OK\n{\n          \"network-connection\": {\n           \"index\": \"3000\",\n           \"subunit\": \"4000\",\n           \"parent-interface\": \"string-4\",\n           \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n           \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n           \"ipaddress\": \"10.0.0.44\",\n           \"mask\": \"192.168.0.15\",\n           \"gateway\": \"10.0.0.44\",\n           \"external-ipaddress\": \"10.0.0.44\",\n           \"isconnected\": \"false\",\n           \"ipaddress-allocation-mode\": \"string-1\",\n           \"ipaddress-allocation-mode-v6\": \"string-5\",\n           \"network\": \"string-3\",\n           \"parent-network\": \"string-5\",\n           \"connected-external-network\": \"string-2\",\n           \"primary\": \"true\",\n           \"network-type\": \"data-external\",\n           \"network-type-val\": \"string-3\",\n           \"vxlan\": \"500\",\n           \"routing-instance\": \"string-5\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/orgs/<UUID>/network-connections/network-connection",
    "title": "Get list of network-connection objects",
    "version": "16.1.2",
    "name": "getNetworkConnectionList",
    "group": "VD_Appliances_Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>uuid</p>"
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
          "content": "         Status: 200 OK\n{\n          \"network-connection\": {\n           \"index\": \"1000\",\n           \"subunit\": \"3000\",\n           \"parent-interface\": \"string-3\",\n           \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n           \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n           \"ipaddress\": \"192.168.0.15\",\n           \"mask\": \"192.168.0.15\",\n           \"gateway\": \"10.0.0.44\",\n           \"external-ipaddress\": \"192.168.0.15\",\n           \"isconnected\": \"false\",\n           \"ipaddress-allocation-mode\": \"string-3\",\n           \"ipaddress-allocation-mode-v6\": \"string-4\",\n           \"network\": \"string-2\",\n           \"parent-network\": \"string-2\",\n           \"connected-external-network\": \"string-3\",\n           \"primary\": \"false\",\n           \"network-type\": \"preconfigured\",\n           \"network-type-val\": \"string-2\",\n           \"vxlan\": \"700\",\n           \"routing-instance\": \"string-5\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/operational/nms/provider/appliances/appliance/<<UUID>>/status/nodes/node",
    "title": "Get list of node objects",
    "version": "16.1.2",
    "name": "getNodeList",
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
          "content": "         Status: 200 OK\n{\n          \"node\": {\n           \"slot-id\": \"string-4\",\n           \"vm-name\": \"string-2\",\n           \"vm-status\": \"string-2\",\n           \"host-ip\": \"string-4\",\n           \"node-type\": \"string-3\",\n           \"cpu-load\": \"string-3\",\n           \"memory-load\": \"string-5\",\n           \"load-factor\": \"string-3\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/operational/nms/provider/appliances/appliance/<<UUID>>/status/ucpe-nodes/node",
    "title": "Get list of node objects",
    "version": "16.1.2",
    "name": "getNodeList",
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
          "content": "         Status: 200 OK\n{\n          \"node\": {\n           \"uuid\": \"string-3\",\n           \"name\": \"string-3\",\n           \"status\": \"string-1\",\n           \"cpu-load\": \"string-3\",\n           \"memory-load\": \"string-5\",\n           \"disk-load\": \"string-1\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/ucpe-nodes/node",
    "title": "Get list of node objects",
    "version": "16.1.2",
    "name": "getNodeList",
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
          "content": "         Status: 200 OK\n{\n          \"node\": {\n           \"uuid\": \"string-4\",\n           \"name\": \"string-2\",\n           \"vendor\": \"string-5\",\n           \"ip-address\": \"hostname\",\n           \"version\": \"string-2\",\n           \"created-at\": \"2014-10-17T14:00:00-05:00\",\n           \"creation-status\": \"false\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/orgs",
    "title": "Get list of orgs objects",
    "version": "16.1.2",
    "name": "getOrgsList",
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
          "content": "         Status: 200 OK\n{\n          \"orgs\": {\n           \"uuid\": \"\",\n           \"network-connections\": {\n            \"network-connection\": {\n             \"index\": \"1000\",\n             \"subunit\": \"3000\",\n             \"parent-interface\": \"string-3\",\n             \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n             \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n             \"ipaddress\": \"192.168.0.15\",\n             \"mask\": \"192.168.0.15\",\n             \"gateway\": \"10.0.0.44\",\n             \"external-ipaddress\": \"192.168.0.15\",\n             \"isconnected\": \"false\",\n             \"ipaddress-allocation-mode\": \"string-3\",\n             \"ipaddress-allocation-mode-v6\": \"string-4\",\n             \"network\": \"string-2\",\n             \"parent-network\": \"string-2\",\n             \"connected-external-network\": \"string-3\",\n             \"primary\": \"false\",\n             \"network-type\": \"preconfigured\",\n             \"network-type-val\": \"string-2\",\n             \"vxlan\": \"700\",\n             \"routing-instance\": \"string-5\"\n            }\n           }\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/orgs",
    "title": "Get list of orgs objects",
    "version": "16.1.2",
    "name": "getOrgsList",
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
          "content": "         Status: 200 OK\n{\n          \"orgs\": {\n           \"uuid\": \"\",\n           \"services\": [ \"string-4\" ],\n           \"available-routing-instances\": [ \"string-3\" ],\n           \"available-provider-orgs\": [ \"string-2\" ],\n           \"available-service-node-groups\": [ \"string-5\" ],\n           \"network-connections\": {\n            \"network-connection\": {\n             \"index\": \"2000\",\n             \"subunit\": \"4000\",\n             \"parent-interface\": \"string-3\",\n             \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n             \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n             \"ipaddress\": \"192.168.0.15\",\n             \"mask\": \"10.0.0.44\",\n             \"gateway\": \"10.0.0.44\",\n             \"external-ipaddress\": \"10.0.0.44\",\n             \"isconnected\": \"true\",\n             \"ipaddress-allocation-mode\": \"string-3\",\n             \"ipaddress-allocation-mode-v6\": \"string-3\",\n             \"network\": \"string-4\",\n             \"parent-network\": \"string-1\",\n             \"connected-external-network\": \"string-1\",\n             \"primary\": \"true\",\n             \"network-type\": \"data-external\",\n             \"network-type-val\": \"string-2\",\n             \"vxlan\": \"300\",\n             \"routing-instance\": \"string-3\"\n            }\n           },\n           \"subscription\": {\n            \"solution-tier\": \"value123\",\n            \"bandwidth\": \"value123\",\n            \"state\": \"value123\",\n            \"created-at\": \"2014-10-17T14:00:00-05:00\",\n            \"terminated-at\": \"2014-10-17T14:00:00-05:00\",\n            \"suspended-at\": \"2014-10-17T14:00:00-05:00\",\n            \"is-analytics-enabled\": \"false\",\n            \"custom-param\": {\n             \"name\": \"string-2\",\n             \"value\": \"string-4\"\n            }\n           }\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn/<<UUID>>/resources/resource",
    "title": "Get list of resource objects",
    "version": "16.1.2",
    "name": "getResourceList",
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
          "content": "         Status: 200 OK\n{\n          \"resource\": {\n           \"name\": \"string-5\",\n           \"resource-type\": \"type1\",\n           \"resource-info\": \"string-3\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/resources/resource",
    "title": "Get list of resource objects",
    "version": "16.1.2",
    "name": "getResourceList",
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
          "content": "         Status: 200 OK\n{\n          \"resource\": {\n           \"name\": \"string-5\",\n           \"resource-type\": \"type1\",\n           \"resource-info\": \"string-2\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/resources/resource",
    "title": "Get list of resource objects",
    "version": "16.1.2",
    "name": "getResourceList",
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
          "content": "         Status: 200 OK\n{\n          \"resource\": {\n           \"name\": \"string-2\",\n           \"resource-type\": \"type1\",\n           \"resource-info\": \"string-2\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/sngs/sng",
    "title": "Get list of sng objects",
    "version": "16.1.2",
    "name": "getSngList",
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
          "content": "         Status: 200 OK\n{\n          \"sng\": {\n           \"name\": \"string-1\",\n           \"id\": \"2\",\n           \"flavor\": \"string-4\",\n           \"services\": [ \"string-2\" ],\n           \"isPartOfVCSN\": \"string-5\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/operational/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn/software-details",
    "title": "Get list of software-details objects",
    "version": "16.1.2",
    "name": "getSoftwareDetailsList",
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
          "content": "         Status: 200 OK\n{\n          \"software-details\": {\n           \"software-version\": \"string-3\",\n           \"current-upgrade-status\": \"completed\",\n           \"last-upgrade-status\": \"success\",\n           \"package-id\": \"string-3\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/stand-by-vcsn",
    "title": "Get list of stand-by-vcsn objects",
    "version": "16.1.2",
    "name": "getStandByVcsnList",
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
          "content": "         Status: 200 OK\n{\n          \"stand-by-vcsn\": {\n           \"uuid\": \"string-5\",\n           \"wan-ip-list\": [ \"string-5\" ],\n           \"ip-address\": \"hostname\",\n           \"network-connections\": {\n            \"network-connection\": {\n             \"index\": \"1000\",\n             \"subunit\": \"2000\",\n             \"parent-interface\": \"string-5\",\n             \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n             \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n             \"ipaddress\": \"192.168.0.15\",\n             \"mask\": \"10.0.0.44\",\n             \"gateway\": \"192.168.0.15\",\n             \"external-ipaddress\": \"192.168.0.15\",\n             \"isconnected\": \"false\",\n             \"ipaddress-allocation-mode\": \"string-2\",\n             \"ipaddress-allocation-mode-v6\": \"string-4\",\n             \"network\": \"string-2\",\n             \"parent-network\": \"string-3\",\n             \"connected-external-network\": \"string-5\",\n             \"primary\": \"true\",\n             \"network-type\": \"none\",\n             \"network-type-val\": \"string-4\",\n             \"vxlan\": \"500\",\n             \"routing-instance\": \"string-3\"\n            }\n           },\n           \"slot\": \"1\",\n           \"region\": \"string-5\",\n           \"vmid\": \"string-5\",\n           \"create-source\": \"string-2\",\n           \"software-details\": {\n            \"software-version\": \"string-3\",\n            \"current-upgrade-status\": \"completed\",\n            \"last-upgrade-status\": \"success\",\n            \"package-id\": \"string-3\"\n           },\n           \"num-cpus\": \"4\",\n           \"memory-size\": \"5000\",\n           \"num-nics\": \"2\",\n           \"resources\": {\n            \"resource\": {\n             \"name\": \"string-2\",\n             \"resource-type\": \"type1\",\n             \"resource-info\": \"string-2\"\n            }\n           }\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/users/user",
    "title": "Get list of user objects",
    "version": "16.1.2",
    "name": "getUserList",
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
          "content": "         Status: 200 OK\n{\n          \"user\": {\n           \"name\": \"string-5\",\n           \"password\": \"password\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/intra-chassis-ha/vcsn-ip-addresses",
    "title": "Get list of vcsn-ip-addresses objects",
    "version": "16.1.2",
    "name": "getVcsnIpAddressesList",
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
          "content": "         Status: 200 OK\n{\n          \"vcsn-ip-addresses\": {\n           \"active-vcsn-ipaddress\": \"10.0.0.44\",\n           \"stand-by-vcsn-ip-address\": \"10.0.0.44\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/operational/nms/provider/appliances/appliance/<<UUID>>/status/intra-chassis-ha-status/vcsn-nodes/vcsn-node",
    "title": "Get list of vcsn-node objects",
    "version": "16.1.2",
    "name": "getVcsnNodeList",
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
          "content": "         Status: 200 OK\n{\n          \"vcsn-node\": {\n           \"vm-name\": \"string-3\",\n           \"slot-number\": \"100\",\n           \"role\": \"string-3\"\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  },
  {
    "type": "GET",
    "url": "/api/config/nms/provider/appliances/appliance/<<UUID>>/vsns/vsn",
    "title": "Get list of vsn objects",
    "version": "16.1.2",
    "name": "getVsnList",
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
          "content": "         Status: 200 OK\n{\n          \"vsn\": {\n           \"uuid\": \"string-1\",\n           \"wan-ip-list\": [ \"string-1\" ],\n           \"ip-address\": \"hostname\",\n           \"network-connections\": {\n            \"network-connection\": {\n             \"index\": \"2000\",\n             \"subunit\": \"1000\",\n             \"parent-interface\": \"string-1\",\n             \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n             \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n             \"ipaddress\": \"192.168.0.15\",\n             \"mask\": \"192.168.0.15\",\n             \"gateway\": \"192.168.0.15\",\n             \"external-ipaddress\": \"10.0.0.44\",\n             \"isconnected\": \"true\",\n             \"ipaddress-allocation-mode\": \"string-5\",\n             \"ipaddress-allocation-mode-v6\": \"string-3\",\n             \"network\": \"string-3\",\n             \"parent-network\": \"string-5\",\n             \"connected-external-network\": \"string-5\",\n             \"primary\": \"true\",\n             \"network-type\": \"preconfigured\",\n             \"network-type-val\": \"string-2\",\n             \"vxlan\": \"300\",\n             \"routing-instance\": \"string-3\"\n            }\n           },\n           \"slot\": \"3\",\n           \"region\": \"string-3\",\n           \"vmid\": \"string-4\",\n           \"create-source\": \"string-5\",\n           \"software-details\": {\n            \"software-version\": \"string-2\",\n            \"current-upgrade-status\": \"completed\",\n            \"last-upgrade-status\": \"success\",\n            \"package-id\": \"string-3\"\n           },\n           \"num-cpus\": \"2\",\n           \"memory-size\": \"1000\",\n           \"num-nics\": \"6\",\n           \"resources\": {\n            \"resource\": {\n             \"name\": \"string-5\",\n             \"resource-type\": \"type1\",\n             \"resource-info\": \"string-3\"\n            }\n           },\n           \"orgs\": {\n            \"uuid\": \"\",\n            \"network-connections\": {\n             \"network-connection\": {\n              \"index\": \"1000\",\n              \"subunit\": \"3000\",\n              \"parent-interface\": \"string-3\",\n              \"ipv4-address\": [ \"versatypes:vniIPv4Addr-value\" ],\n              \"ipv6-address\": [ \"versatypes:vniIPv6Addr-value\" ],\n              \"ipaddress\": \"192.168.0.15\",\n              \"mask\": \"192.168.0.15\",\n              \"gateway\": \"10.0.0.44\",\n              \"external-ipaddress\": \"192.168.0.15\",\n              \"isconnected\": \"false\",\n              \"ipaddress-allocation-mode\": \"string-3\",\n              \"ipaddress-allocation-mode-v6\": \"string-4\",\n              \"network\": \"string-2\",\n              \"parent-network\": \"string-2\",\n              \"connected-external-network\": \"string-3\",\n              \"primary\": \"false\",\n              \"network-type\": \"preconfigured\",\n              \"network-type-val\": \"string-2\",\n              \"vxlan\": \"700\",\n              \"routing-instance\": \"string-5\"\n             }\n            }\n           }\n          }\n         }",
          "type": "json"
        }
      ]
    },
    "filename": "./versa-rest/vd_appliances_management.js",
    "groupTitle": "VD_Appliances_Management"
  }
] });
