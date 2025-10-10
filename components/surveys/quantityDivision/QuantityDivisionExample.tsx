import React, { useState } from 'react'
import { Box, Typography, Button, Grid, Paper, Chip } from '@mui/material'
import { divideQuantitiesBetweenMeals } from '../surveyStepper/utils/quantityDivider'
import { guestsStepsType, mealStepType } from '../../../src/types/global'

/**
 * Componente de ejemplo para demostrar la división automática de cantidades
 * Este componente muestra cómo funciona la funcionalidad con datos de ejemplo
 */
const QuantityDivisionExample: React.FC = () => {
  const [result, setResult] = useState<any>(null)

  // Datos de ejemplo
  const guestsAmount: guestsStepsType = {
    childs: 20,
    kids: 30,
    teens: 25,
    adults: 25
  }

  const mealStepExample: mealStepType = {
    comidas: [
      {
        comida: 1,
        nombre: "Arroz",
        alimento: [
          { id: 1, nombre: "Arroz blanco", quantity: 100, unit: "gramos", unitId: 1 }
        ]
      },
      {
        comida: 2,
        nombre: "Carne",
        alimento: [
          { id: 2, nombre: "Carne de res", quantity: 100, unit: "gramos", unitId: 1 }
        ]
      },
      {
        comida: 3,
        nombre: "Ensalada",
        alimento: [
          { id: 3, nombre: "Lechuga", quantity: 100, unit: "gramos", unitId: 1 }
        ]
      }
    ]
  }

  const handleTestDivision = () => {
    const divided = divideQuantitiesBetweenMeals(mealStepExample, guestsAmount)
    setResult(divided)
  }

  const totalGuests = (guestsAmount.childs || 0) + 
                     (guestsAmount.kids || 0) + 
                     (guestsAmount.teens || 0) + 
                     (guestsAmount.adults || 0) + 
                     (guestsAmount.elderly || 0)

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Ejemplo de División Automática de Cantidades
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Datos de Entrada
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Total de comensales:</strong> {totalGuests}
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Comidas seleccionadas:</strong> {mealStepExample.comidas.length}
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              {mealStepExample.comidas.map((comida, index) => (
                <Chip 
                  key={index} 
                  label={comida.nombre} 
                  sx={{ mr: 1, mb: 1 }} 
                />
              ))}
            </Box>
            
            <Button 
              variant="contained" 
              onClick={handleTestDivision}
              sx={{ mt: 2 }}
            >
              Probar División
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Resultado de la División
            </Typography>
            
            {result ? (
              <Box>
                <Typography variant="body2" sx={{ mb: 2, color: 'success.main' }}>
                  ✅ División aplicada automáticamente
                </Typography>
                
                {result.comidas.map((comida: any, index: number) => (
                  <Box key={index} sx={{ mb: 2, p: 1, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="subtitle2">
                      {comida.nombre}
                    </Typography>
                    {comida.alimento.map((alimento: any, alimentoIndex: number) => (
                      <Typography key={alimentoIndex} variant="body2" sx={{ ml: 2 }}>
                        • {alimento.nombre}: <strong>{alimento.quantity}</strong> {alimento.unit}
                      </Typography>
                    ))}
                  </Box>
                ))}
                
                <Typography variant="body2" sx={{ mt: 2, p: 1, bgcolor: 'info.light', borderRadius: 1 }}>
                  <strong>Distribución:</strong> {Math.floor(totalGuests / result.comidas.length)} comensales por comida
                  {totalGuests % result.comidas.length > 0 && (
                    <span> (+{totalGuests % result.comidas.length} en las primeras {totalGuests % result.comidas.length} comidas)</span>
                  )}
                </Typography>
              </Box>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Haz clic en "Probar División" para ver el resultado
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default QuantityDivisionExample
