# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.conf.urls import url

from . import views

urlpatterns = [
    # URL pattern for FlavorListView
    url(
        regex=r'^$',
        view=views.FlavorListView.as_view(),
        name='list'
    ),
]
