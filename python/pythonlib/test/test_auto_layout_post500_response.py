# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.auto_layout_post500_response import AutoLayoutPost500Response

class TestAutoLayoutPost500Response(unittest.TestCase):
    """AutoLayoutPost500Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> AutoLayoutPost500Response:
        """Test AutoLayoutPost500Response
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `AutoLayoutPost500Response`
        """
        model = AutoLayoutPost500Response()
        if include_optional:
            return AutoLayoutPost500Response(
                error = ''
            )
        else:
            return AutoLayoutPost500Response(
        )
        """

    def testAutoLayoutPost500Response(self):
        """Test AutoLayoutPost500Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()