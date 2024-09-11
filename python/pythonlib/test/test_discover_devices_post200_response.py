# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.discover_devices_post200_response import DiscoverDevicesPost200Response

class TestDiscoverDevicesPost200Response(unittest.TestCase):
    """DiscoverDevicesPost200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> DiscoverDevicesPost200Response:
        """Test DiscoverDevicesPost200Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `DiscoverDevicesPost200Response`
        """
        model = DiscoverDevicesPost200Response()
        if include_optional:
            return DiscoverDevicesPost200Response(
                count = 56,
                devices = [
                    formlabs.models.device_status_model.DeviceStatusModel()
                    ]
            )
        else:
            return DiscoverDevicesPost200Response(
        )
        """

    def testDiscoverDevicesPost200Response(self):
        """Test DiscoverDevicesPost200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()