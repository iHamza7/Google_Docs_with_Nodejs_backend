import 'package:flutter/material.dart';
import 'package:full_app/screens/document_screen.dart';
import 'package:full_app/screens/home_screen.dart';
import 'package:full_app/screens/login_screen.dart';
import 'package:routemaster/routemaster.dart';

final loggedOutRoute = RouteMap(routes: {
  '/': (route) => const MaterialPage(
        child: LoginScreen(),
      ),
});
final loggedInRoute = RouteMap(routes: {
  '/': (route) => const MaterialPage(
        child: HomeScreen(),
      ),
  '/document/:id': (route) => MaterialPage(
        child: DocumentScreen(id: route.pathParameters['id']!),
      ),
});
