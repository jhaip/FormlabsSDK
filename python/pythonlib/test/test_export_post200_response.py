# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.export_post200_response import ExportPost200Response

class TestExportPost200Response(unittest.TestCase):
    """ExportPost200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ExportPost200Response:
        """Test ExportPost200Response
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ExportPost200Response`
        """
        model = ExportPost200Response()
        if include_optional:
            return ExportPost200Response(
                models = [
                    ''
                    ]
            )
        else:
            return ExportPost200Response(
        )
        """

    def testExportPost200Response(self):
        """Test ExportPost200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()