      {/* Navigation directe vers tous les modules */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-8 text-white">🎯 Accès direct aux modules</h2>
          <p className="text-center mb-12 text-muted-foreground">
            Cliquez sur n'importe quel module pour explorer son contenu librement
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:glow transition-all duration-300 cursor-pointer" onClick={() => handleModuleAccess('module1')}>
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">Module 1</CardTitle>
                <CardDescription>Organisation & automatisation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Accéder maintenant
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:glow transition-all duration-300 cursor-pointer" onClick={() => handleModuleAccess('module2')}>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">Module 2</CardTitle>
                <CardDescription>Gestion documentaire & confidentialité</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Accéder maintenant
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:glow transition-all duration-300 cursor-pointer" onClick={() => handleModuleAccess('module3')}>
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">Module 3</CardTitle>
                <CardDescription>Productivité IA pour avocats</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Accéder maintenant
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:glow transition-all duration-300 cursor-pointer" onClick={() => handleModuleAccess('module4')}>
              <CardHeader className="text-center">
                <Award className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-lg">Module 4</CardTitle>
                <CardDescription>Formation complète 6 mois</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Accéder maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
