# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.conf.urls import include, url

urlpatterns = [
    # root url for api, render back some info app
    url(
        r'^flavors/',
        include('two_scoops_project.flavors.api_urls', namespace='flavors'),
    ),
]
