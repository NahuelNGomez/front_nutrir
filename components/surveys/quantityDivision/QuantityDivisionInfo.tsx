import React from 'react'
import { Box, Typography, Chip, Alert } from '@mui/material'
import { InfoOutlined } from '@mui/icons-material'
import { guestsStepsType } from '../../../src/types/global'

interface Props {
  guestsAmount: guestsStepsType
  comidasCount: number
  isDivided: boolean
}

const QuantityDivisionInfo: React.FC<Props> = ({
  guestsAmount,
  comidasCount,
  isDivided
}) => {
  const totalGuests = (guestsAmount.childs || 0) + 
                     (guestsAmount.kids || 0) + 
                     (guestsAmount.teens || 0) + 
                     (guestsAmount.adults || 0) + 
                     (guestsAmount.elderly || 0)

  if (!isDivided || comidasCount <= 1) {
    return null
  }

  const cantidadPorComida = Math.floor(totalGuests / comidasCount)
  const resto = totalGuests % comidasCount

  return (
    <Box sx={{ mb: 2 }}>
      <Alert 
        severity="info" 
        icon={<InfoOutlined />}
        sx={{ 
          borderRadius: 2,
          '& .MuiAlert-message': {
            width: '100%'
          }
        }}
      >
        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
          División automática de cantidades
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Se detectaron {comidasCount} comidas en esta etapa. Las cantidades se han dividido automáticamente:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
          <Typography variant="body2">
            Total de comensales: <strong>{totalGuests}</strong>
          </Typography>
          <Typography variant="body2">→</Typography>
          <Typography variant="body2">
            {cantidadPorComida} por comida
            {resto > 0 && (
              <span style={{ color: '#1976d2' }}>
                {' '}(+{resto} en las primeras {resto} comidas)
              </span>
            )}
          </Typography>
        </Box>
        {resto > 0 && (
          <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
            Las primeras {resto} comidas tendrán {cantidadPorComida + 1} comensales cada una
          </Typography>
        )}
      </Alert>
    </Box>
  )
}

export default QuantityDivisionInfo
