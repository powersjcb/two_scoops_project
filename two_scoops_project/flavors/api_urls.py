# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url

urlpatterns = [
    url(
        regex=r'^$',
        view=api_views.FlavorsList.as_view(),
    ),
]
