# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.scene_type_model_layer_thickness import SceneTypeModelLayerThickness

class TestSceneTypeModelLayerThickness(unittest.TestCase):
    """SceneTypeModelLayerThickness unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SceneTypeModelLayerThickness:
        """Test SceneTypeModelLayerThickness
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SceneTypeModelLayerThickness`
        """
        model = SceneTypeModelLayerThickness()
        if include_optional:
            return SceneTypeModelLayerThickness(
            )
        else:
            return SceneTypeModelLayerThickness(
        )
        """

    def testSceneTypeModelLayerThickness(self):
        """Test SceneTypeModelLayerThickness"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()