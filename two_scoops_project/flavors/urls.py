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

    url(
        regex=r'^(?P<pk>[0-9]+)/$',
        view=views.FlavorDetailView.as_view(),
        name='detail'
    )
]
