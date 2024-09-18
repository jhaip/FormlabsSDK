# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.estimated_print_time_model import EstimatedPrintTimeModel

class TestEstimatedPrintTimeModel(unittest.TestCase):
    """EstimatedPrintTimeModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> EstimatedPrintTimeModel:
        """Test EstimatedPrintTimeModel
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `EstimatedPrintTimeModel`
        """
        model = EstimatedPrintTimeModel()
        if include_optional:
            return EstimatedPrintTimeModel(
                total_print_time_s = 1.337,
                preprint_time_s = 1.337
            )
        else:
            return EstimatedPrintTimeModel(
        )
        """

    def testEstimatedPrintTimeModel(self):
        """Test EstimatedPrintTimeModel"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
